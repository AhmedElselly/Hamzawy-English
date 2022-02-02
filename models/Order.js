import mongoose from "mongoose";
const {Schema} = mongoose;

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
    method: {
        type: Number,
    },
    cart: {
        products: Array
    }
    // products: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Product',
    //         count: {
    //             type: Number,
    //             default: 1
    //         }
    //     }
    // ]
},{
    timestamps: true
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);