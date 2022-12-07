import bcrypt from 'bcryptjs'; // to help hash user passwords to keep them hidden using blowfish cipher
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try{
        const existingUser = await User.findOne({ email });

        // if there is no user with that email in database
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist"});

        // to compare the password normal string compare not good.
        // use bcrypt to compare the hash password to add level of security to passwords
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        // if the hashed passwords don't match user should not be able to sign in
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid password"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token});
    } catch(error){
        res.status(500).json({ message: 'Unidentified error'})
    }
}

export const signup = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exist"});

        // might need to change
        if(password != confirmPassword) return res.status(400).json({ message: "Passwords don't match"});

        //Salt means, 12 is difficulty of password
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password, hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: result.email, id: result._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({ result, token});
    } catch (error) {
        res.status(500).json({ message: 'Unidentified error'})
    }
}