require('dotenv').config()
const mongoose = require('mongoose')
const express=require('express')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const ejs = require('ejs');

const app=express()// express app

app.set('view engine', 'ejs');
app.use(cors())
const workoutRoutes= require('./routes/webRoutes')

// global middleware
app.use(express.json())

app.use((req,res,next)=>{
console.log(req.path,req.method);
next()

});
app.use(cookieParser())

app.use(workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
// listen for requests
app.listen(process.env.PORT,()=>{
    console.log(`listening on port,`,process.env.PORT);
    })
})

.catch((error)=>{
console.log(error);
})





