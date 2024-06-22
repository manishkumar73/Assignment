import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    message: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
