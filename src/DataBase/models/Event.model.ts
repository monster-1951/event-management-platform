import { Event } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const eventSchema = new mongoose.Schema<Event>({
    name:{
        type:String,
        required:true
    },
    venue :{
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    },
    organizer :{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    seats:{
        type:String,
        default:"0"
    },
    attendees :[{
        type:Schema.Types.ObjectId,
        ref:'User',
        default:[]
    }],
    description:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
    },
    banner:{
        type:String,
    },
    category:{
        type: String,
        required:true
    },
    noOfInterests:{
        type:Number,
        default:0
    }
},{timestamps:true})

const Eevent = mongoose.models.Eevent || mongoose.model("Eevent",eventSchema)

export default Eevent;