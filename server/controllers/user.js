import bcrypt from 'bcryptjs'; // to help hash user passwords to keep them hidden using blowfish cipher
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

import User from '../models/user.js';

const secret = 'test';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try{
        const existingUser = await User.findOne({ email });

        // if there is no user with that email in database
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist"});

        // to compare the password normal string compare not good.
        // use bcrypt to compare the hash password to add level of security to passwords
        const isPasswordCorrect = await User.findOne({ password });

        // if the hashed passwords don't match user should not be able to sign in
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid password"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, secret, {expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token});
    } catch(error){
        res.status(500).json({ message: 'Unidentified error'})
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords don't match" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
  
      const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });
  
      await sendEmail(result.email);
  
      res.status(200).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: 'Unidentified error' })
    }
}

export const sendEmail = async (email) => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'EchoAtu@gmail.com',
          pass: 'yklmrwhzmuivtxdp'
        }
      });
  
      const mailOptions = {
        from: 'EchoAtu@gmail.com',
        to: email,
        subject: 'Welcome to Echo!',
        html: `
          <html>
            <body style="background-color: #f8f8f8; font-family: Arial, sans-serif; color: #333;">
              <h1 style="color: #333;">Welcome to Echo!</h1>
              <p style="font-size: 16px;">Dear user,</p>
              <p style="font-size: 16px;">Thank you for signing up to echo! We are excited to have you as part of our community.</p>
              <p style="font-size: 16px;">If you have any questions or feedback, please don't hesitate to reach out to us at the above email.</p>
              <p style="font-size: 16px;">Best regards,</p>
              <p style="font-size: 16px;">Echo</p>
            </body>
          </html>
        `
      };
  
      await transporter.sendMail(mailOptions);
  
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email: ', error);
    }
};