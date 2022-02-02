import mongoose from "mongoose";
const mongoosePaginate = require('mongoose-paginate-v2');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

ProductSchema.plugin(mongoosePaginate)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);