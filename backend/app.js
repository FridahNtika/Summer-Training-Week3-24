import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";
import bodyParser from "body-parser";

// Specify a port number for the server
const port=5000;
const cors = require("cors");
app.use(cors());
// use middleware to parse json request bodies
app.use(express.json())

//api call route
const chat = require(".api/chat");
app.use("/chat", chat);

// Start the server and listen to the port
dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
