import { mongooseConnect } from "@/lib/mongoose";
import {buffer} from 'micro';

import stripePackage from 'stripe';
const Order = require('../../models/Order.js');

const stripe = stripePackage(process.env.STRIPE_SK);
const endpointSecret = "whsec_daa01ba8b50c588760a30440cf05518b129861f1de622aee6bba6d50424da985";


export default async function handler(req,res) {
    await mongooseConnect();

    const sig = req.headers['stripe-signature'];

    let event;
  
    try {
      event = stripe.webhooks.constructEvent(await buffer(req), sig, 
      endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
   
    switch (event.type) {
      case 'checkout.session.completed':
        const data= event.data.object;
        const orderId = data.metadata.orderId;
        const paid = data.payment_status === 'paid';
        if (orderId && !paid) {
          await Order.findByIdAndUpdate(orderId,{
            
            paid:true,
            
          })
          console.log('Order updated successfully.')
        }
        break;
      
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send('ok');
}

export const config = {
    api:{bodyParser:false}
};

