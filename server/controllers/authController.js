import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new BadRequestError('Please provide all values');
    };

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
        throw new BadRequestError('Email already in use');
    };

    const user = await User.create({ name, email, password });
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ 
        user: {
            name: user.name,
            email: user.email,
            location: user.location,    
        }, 
        token });
};

export const login = async (req, res) => {
    res.send('login user');
};

export const updateUser = async (req, res) => {
    res.send('update user');
};