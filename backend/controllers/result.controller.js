import { User } from "../models/user.model";

export const submitResult = async (req, res) => {
  const { quizId, score, totalPoints } = req.body;
  const { user } = req;

  try {
    const quiz = user.quizzes.id(quizId);
    if (!quiz) {
      return res.status(404).send({ message: "Quiz not found" });
    }

    const result = { quizId, score, totalPoints, completedAt: new Date() };
    user.results.push(result);
    await user.save();

    return res.status(201).send({ message: "Result saved successfully", result });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: "Something went wrong" });
  }
};
