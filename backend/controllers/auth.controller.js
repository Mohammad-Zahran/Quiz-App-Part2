import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        if(!username || !email || !password){
            return res.status(500).send({
                message: "All fields are required",
            });
        }

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashed,
        });

        return res.json(user);
    }
    catch (error){
        console.log(error.message);

        return res.status(500).send({
            message: "Something went wrong",
        });
    }
};