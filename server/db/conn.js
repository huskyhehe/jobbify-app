import mongoose from "mongoose";

const connectDb = (uri) => {
    return mongoose.connect(uri);
};

export default connectDb;