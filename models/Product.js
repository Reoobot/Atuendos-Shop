
import mongoose, {model, Schema, models} from 'mongoose'

const ProductSchema = new Schema({
    title: {type:String, requiere:true},
    description: String,
    price: {type: Number, require: true},
    images: [{type:String}],
    category: {type:mongoose.Types.ObjectId,ref:'Category'}, 
    properties: {type:Object},
       
}, {
    timestamps:true,
});

export const Product = models.Product || model('Product', ProductSchema);