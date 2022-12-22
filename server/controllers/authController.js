import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
import attachCookie from "../utils/attachCookie.js";

const register = async (req, res) => {
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
    attachCookie({ res, token });

    res.status(StatusCodes.CREATED).json({ 
        user: {
            name: user.name,
            email: user.email,
            location: user.location  
        }, 
        location: user.location
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    // checkout whether form is filled
    if (!email || !password) {
        throw new BadRequestError('Please provide all values');
    };
    // check whether user exists
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials')
    };
    // check whether password is correct
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    };

    const token = user.createJWT();
    attachCookie({ res, token });
    user.password = undefined;
    res.status(StatusCodes.OK).json({ user, location: user.location });
};

const updateUser = async (req, res) => {
    const { email, name,  location } = req.body;
    if (!email || !name || !location) {
        throw new BadRequestError('Please provide all values');
    }
    const user = await User.findOne({ _id: req.user.userId });

    user.email = email;
    user.name = name;
    user.lastName = lastName;
    user.location = location;

    await user.save();

    const token = user.createJWT();
    attachCookie({ res, token });
    res.status(StatusCodes.OK).json({ user, location: user.location });
};

const getCurrentUser = async (req, res) => {
    const user = await User.findOne( { _id: req.user.userId });
    res.status(StatusCodes.OK).json({ user, location: user.location });
};

const logout = async (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now() + 1000),
    });
    res.status(StatusCods.OK).json({ msg: 'user logged out!' });
};

export {
    register,
    login,
    updateUser,
    getCurrentUser,
    logout
};