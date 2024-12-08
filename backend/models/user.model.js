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

const quizSchema = new Schema({
    title: {type: String, required: true},
    questions: [questionSchema],
    createdAt: {type: Date, default: Date.now},
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
    quizzes: [quizSchema],
});

export const User = model("User", userSchema);



