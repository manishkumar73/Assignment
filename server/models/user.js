import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true }, // Add username field
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true }
});

export default mongoose.model('User', userSchema);
