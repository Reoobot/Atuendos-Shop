

import {Schema, model, models} from 'mongoose';

const OrderShema = new Schema ({
    line_items:Object,
    name:String,
    email:String,
    city:String,
    postalCode:String,
    streetAddress:String,
    country:String,
    paid:Boolean,
}, {
    timestamps:true,
});

export const Order = models?.Order || model('Order', OrderShema);