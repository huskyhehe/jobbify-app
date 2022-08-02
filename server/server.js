import express from "express";

// dotenv
import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";

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


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json( { msg: 'Welcome!' });
});
app.get('/api/v1', (req, res) => {
    res.json( { msg: 'API' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

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