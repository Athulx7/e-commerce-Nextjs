import mongoose from "mongoose";

export const mongoConnect = async ()=>{
    if(mongoose.connection.readyState >= 1) {
        return;
    }

    await mongoose.connect(process.env.DATABASE,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    console.log("mongo db connected successfully")
}