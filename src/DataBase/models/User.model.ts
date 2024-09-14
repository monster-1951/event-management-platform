import { USer } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema<USer>({
    userName:{
        type:String,
        required:true
    },
    dp:{
        type:String,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        default:""
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    eventsInvolvedIn:[{
        type:Schema.Types.ObjectId,
        ref:'Eevent',
        default:[]
    }],
    eventsAttended:[{
        type:Schema.Types.ObjectId,
        ref:'Eevent',
        default:[]
    }],
    eventsToBeAttended:[{
        type:Schema.Types.ObjectId,
        ref:'Eevent',
        default:[]
    }],
    wishToAttended:[{
        type:Schema.Types.ObjectId,
        ref:'Eevent',
        default:[]
    }],
    bio:{
        type:String,
    }
   
},{timestamps:true})

const User = mongoose.models?.User || mongoose.model("User",userSchema)

export default User;