import express from 'express';
import rateLimiter from 'express-rate-limit';
import authenticateUser from '../middleware/auth.js';
import { 
    register, 
    login, 
    updateUser,
    getCurrentUser,
    logout 
} from "../controllers/authController.js";


const authRouter = express.Router();

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

authRouter.route('/register').post(register);
authRouter.route('/login').post(login);
authRouter.route('/updateUser').patch(authenticateUser, updateUser);
authRouter.route('/getCurrentUser').get(authenticateUser, getCurrentUser);
authRouter.get('/logout', logout);

export default authRouter;