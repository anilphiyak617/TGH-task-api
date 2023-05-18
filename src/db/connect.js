import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export async function connect() {
    const uri = process.env.MONGO_URI;

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          
        console.log('Connected to MongoDB sucessfully');
    }
    catch(error){
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }

}

export default connect;