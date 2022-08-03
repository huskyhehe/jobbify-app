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
    res.status(StatusCodes.CREATED).json({ 
        user: {
            name: user.name,
            email: user.email,
            location: user.location  
        }, 
        token,
        location: user.location
    });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    // checkout whether form is filled
    if (!email || !password) {
        throw new BadRequestError('Please provide all values');
    };
    // check whether user exists
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        throw new UnAuthenticatedError('Invalid Credentials')
    };
    // check whether password is correct
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Invalid Credentials')
    };

    const token = user.createJWT();
    user.password = undefined;
    res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export const updateUser = async (req, res) => {
    res.send('update user');
};