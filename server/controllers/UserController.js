const mongoose=require('mongoose');
const { response } = require('express');
const User = require('../models/User');

const jwt=require('jsonwebtoken')


// validation
const handleErrors=(err)=>{
  console.log(err.message,err.code);
  let errors={email:'',password:''}

  if(err.message=== 'incorrect email'){
    errors.email='The email is not registered'
  }
  if(err.message=== 'incorrect password'){
    errors.email='The password is incorrect'
  }

  if(err.code ===11000){
    errors.email='email already registered'
    return errors;
  }

  if(err.message.includes('User validation failed')){
    Object.values(err.errors).forEach(({properties})=>{
      errors[properties.path]=properties.message;
    })
  }
  return errors;
}

const maxAge=3*24*60*60;

const createToken=(id)=>{
return jwt.sign({id},'this is a secret string',{
  expiresIn:maxAge
})
}
const logout=(req,res)=>{
  res.cookie('jwt','',{maxAge:1});

}
const login_post=async(req,res)=>{
 
    const{email,password}=req.body;
        try {
          // call the static method form the User model
          const user=await User.login(email,password)
          // create a token using the defined method above
          const token=createToken(user._id);
          // generate a cookie
          res.cookie('jwt',token,{
            httpOnly:true,
            maxAge:maxAge*1000
          })
          res.status(200).json({user:user._id})
        
        } catch (err) {
          const errors=handleErrors(err)
          res.status(400).json({errors})
        }
}

const user_add_post=async(req,res)=>{
 
  const{email,password}=req.body;
    

      try {
        const user=await User.create({email,password});
        const token=createToken(user._id);
        res.cookie('jwt',token,{
          httpOnly:true,
          maxAge:maxAge*1000
        })
        res.status(200).json({user:user._id})
    } catch (err) {
      const errors=handleErrors(err)
    res.status(400).json(errors)
    }

}


module.exports={
  login_post,
  user_add_post,
  logout
}