import nodemailer from 'nodemailer';
import express from 'express';
import cors from 'cors';
import bodyParser  from 'body-parser';
import {conn, Mails} from '../schemas/schema.js';

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

export async function sendEmail(req,res) {
         console.log(req.body);
         const {uname, umail, userEmail, message} = req.body;

        let transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_USER, // generated  user
            pass: 'SR$Ak@mM1', // generated password
          },
        });
      
        let info = await transporter.sendMail({
          from: `Fokat Guru 👻 ${umail}`, // sender address
          to: userEmail, // list of receivers
          subject: `Mail from  ✔ ${uname}`, // Subject line
          text: message, // plain text body
        //   html: "<b>Hello world?</b>", // html body

        }).then((info)=>{
            res.status(201).json({msg : "Email has been sent successfully!"});
            const result =  new Mails({
                  uname,
                  umail,
                  userEmail,
                  message
            })
            result.save();
            console.log("Message sent: %s", info.messageId);
        }).catch(()=> res.status(502).json({error : "mail not sent"}));
} 
