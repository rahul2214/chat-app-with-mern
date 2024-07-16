import path from "path";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroute.js";
import messagesRoutes from "./routes/messagesroute.js";

import userRoutes from "./routes/userroute.js";
import cookieParser from "cookie-parser";
import connectTOMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRoutes); 
app.use("/api/messages",messagesRoutes);

app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () =>{
    connectTOMongoDB();
    console.log(`listening on port ${PORT}`)});