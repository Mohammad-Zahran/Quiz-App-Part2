import {Schema, model} from "mongoose";


const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        type: String,
        required: true
    }],
    correctOption: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        default: 10
    }
});

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
});

export const User = model("User", userSchema);
export const Question = model("Question", questionSchema);

