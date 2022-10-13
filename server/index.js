import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js';

// using express middleware to connect application
const app = express();

//posts must be used after localhost 5000 as I added prefix
app.use('/posts', postRoutes);

// body parser to send requests
app.use(bodyParser.json({ limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}));
app.use(cors());

//Mongo is hosting my database in their cloud
// add ip address on mongo cloud if not working

const CONNECTION_URL = 'mongodb+srv://Ronan22:Ronan22@cluster1.ooyrle4.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    // if connection success run the following in the console
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    //if connection fails output on error message to the console
    .catch((error) => console.log(error.message));


