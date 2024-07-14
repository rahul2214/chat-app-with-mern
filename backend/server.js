import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroute.js";
import messagesRoutes from "./routes/messagesroute.js";

import userRoutes from "./routes/userroute.js";
import cookieParser from "cookie-parser";
import connectTOMongoDB from "./db/connectToMongoDB.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
// app.get("/", (req, res) => {
//     res.send("Hello");
// })
// app.get("/api/auth/signup", (req, res) => {
//     console.log("signup route");
// })
// app.get("/api/auth/login", (req, res) => {
//     console.log("login route");
// })
// app.get("/api/auth/logout", (req, res) => {
//     console.log("logout route");
// })
app.use("/api/auth",authRoutes); 
app.use("/api/messages",messagesRoutes);

app.use("/api/users", userRoutes);
app.listen(PORT, () =>{
    connectTOMongoDB();
    console.log(`listening on port ${PORT}`)});