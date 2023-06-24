
// const express =require('express');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router/route.js';

const app =express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port =5000;



/** Mongo_DB connection  */
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URL)   // it give promises.
.then(()=>{                    
    console.log("Database connected to server");
})
.catch((err)=>{
    console.log(err);
});

/** HTTP get request */
app.get('/',(req,res)=>{
    res.status(201).json("Home request");
});


/**api routes  */
app.use('/api',router);

/** Start the server */
app.listen(port,()=>{
    console.log(`server is running at port  ${port}`);
})

