import mongoose from 'mongoose';


export const ConnectDB = async () => {
    const DB_URL = process.env.MONGODB_URI;
    try {
        const conn = await mongoose.connect(DB_URL);

        console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}