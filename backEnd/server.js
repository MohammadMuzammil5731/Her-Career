import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// Database connection
connectDB();

const app = express();

// Middlewares
app.use(cors({
    origin:true,
    credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req,res) =>{
    res.send("Auth API running")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
// console.log("JWT:", process.env.JWT_SECRET);
