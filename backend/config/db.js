import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
            
            console.log("DB connected successfully")
    
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with a failure code
    }
};
