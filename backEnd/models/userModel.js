import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
    },
    
    phone:{
        type: Number,
        required: true,
    },
    role:{
        type: String,
        enum: ['job_seeker', 'employer', 'admin'],
        default: 'job_seeker',
    }
},{ timestamps: true}
);

export default mongoose.model('User', userSchema)