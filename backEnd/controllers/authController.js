import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async(req,res) =>{
    try {
        const { name, email, password, phone} = req.body;

        // Check user exists
        const userExists = await User.findOne ({ email });
        if(userExists){
            return res.status(400).json({msg:"User already exists"});
        }


        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)


        // create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone
        });

        res.status(201).json({msg: "User registered successfully"});


    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

// LOGIN

export const login = async (req,res) =>{
    try {
        const { email, password } = req.body;

        // find user
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        // compare password 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg:"Invalid credentials" });
        }

        // create token
        const token = jwt.sign(
            { 
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d"}
        );

        res.json({
            msg: "Login successful",
            token,
        });


    } catch (error) {
        res.status(500).json({ error:error.message });
    }
};