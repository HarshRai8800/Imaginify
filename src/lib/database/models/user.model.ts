import { models, Schema,model } from "mongoose";


const UserSchema = new Schema({
    clerkId:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    photo:{type:String,rquired:true},
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    planId:{
        type:Number,
        default:1
    },
    creditBalance:{
        type:Number,
        default:10
    }
})


const User = models?.User||model("User",UserSchema)
export default User