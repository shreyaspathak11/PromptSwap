import mongoose from "mongoose";

let isConnected = false;    // track connection status

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('mongodb is connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DB,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        isConnected = true;
        console.log('mongodb is connected');
    } catch (err) {
        console.log(err);
    }
    }
