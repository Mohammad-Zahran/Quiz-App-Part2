import { Schema, model } from "mongoose";

const resultSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    quizId: {
        type: Schema.Types.ObjectId,
        ref: "Quiz",
        required: true
    },
    score: {
        type: Number,
        required: true,
    },
    totalPoints: {
        type: Number,
        required: true
    },
    completedAt: {
        type: Date,
        default: Date.now 
    },
});

export const Result = model("Result", resultSchema);