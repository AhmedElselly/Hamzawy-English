import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

export default mongoose.models.User || mongoose.model('User', UserSchema);