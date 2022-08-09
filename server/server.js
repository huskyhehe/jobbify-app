import express from "express";

// dotenv
import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";

// morgan
import morgan from "morgan";

// cors
import cors from "cors";

// db
import connectDb from "./db/conn.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

// deploy
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';


const app = express();

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
};

const port = process.env.PORT || 5000;

// only when ready to deploy
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);


// only when ready to deploy
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const uri = process.env.ATLAS_URI;

const start = async() => {
    try {
        await connectDb(uri);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}.`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();