import mongoose  from "mongoose";
export const connectDB = async ()=>{
    try {
        const mongourl=process.env.MONGO_URL
        await mongoose.connect(mongourl);
        console.log("done idiot")
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }
}