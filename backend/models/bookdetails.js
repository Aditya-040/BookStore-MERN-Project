import mongoose from "mongoose";

const bookschema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishyear:{
            type:Number,
            required:true,
        }
    },{
        timestamp:true,
    }
)
export const book = mongoose.model('story of ghats', bookschema);