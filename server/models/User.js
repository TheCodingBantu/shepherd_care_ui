const mongoose=require('mongoose')
const {isEmail} =require('validator')
const bcrypt=require('bcrypt')

const Schema= mongoose.Schema

const UserSchema=new Schema({
    // how should a typical document look like (enforces the schema )
    email:{
        type:String,
        required:[true,'Please enter an email address'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    },
    password:{
        type: String,
        required: [true,'Please enter a password'],
        minlength:[6,'Minimum password length is 6 characters']
    },
  
},{timestamps:true})

UserSchema.pre('save', async function(next) {
  const salt=await bcrypt.genSalt();
  this.password=await bcrypt.hash(this.password,salt)
  next();
});

// static login method
UserSchema.statics.login= async function (email,password){
    const user=await this.findOne({email});
    if(user){
    const auth=await bcrypt.compare(password,user.password) 
    if(auth){
        return user
    }  
    throw Error('incorrect password')
    }throw Error('incorrect email')
}
// creating a model that can be exported into other files
module.exports=mongoose.model('User',UserSchema)

 