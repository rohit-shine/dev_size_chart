import mongoose from "mongoose";

export const conn = mongoose.connect("mongodb://localhost:27017/SizeChart",()=>{
    console.log("Connected to database successfully");
}).catch(err => console.log(err));


//shop Info Schema

const Token = new mongoose.Schema({
    shop : String,
    accessToken : String
})

export const shopinfo = mongoose.model("shopinfo",Token);

//Mail Schema

const MailSchema = new mongoose.Schema({
    uname : {type : String, required : true},
    umail : {type: String , required : true},
    userEmail : {type: String, required : true},
    message : {type : String , required : true}
})


export const Mails = mongoose.model("Mails", MailSchema);

