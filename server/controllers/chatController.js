import Chat from '../models/Chat.js';

export const getChats = async (req, res) => {
    try {
        const chats = await Chat.find({ userId: req.userId });
        res.status(200).json(chats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createChat = async (req, res) => {
    const { message } = req.body;

    const newChat = new Chat({
        message,
        userId: req.userId,
        createdAt: new Date(),
    });

    try {
        await newChat.save();
        res.status(201).json(newChat);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
