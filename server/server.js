import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./utils/config.js";
import bookRoutes from "./routes/book.route.js";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to MERN Stack");
});

// Enable CORS
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//     // credentials: true, // This is important to allow the frontend to access the token
//   })
// );

// Routes
app.use("/books", bookRoutes);

// Connect to Database and Server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DataBase");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
