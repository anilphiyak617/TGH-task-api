import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import connect from './db/connect.js';
import taskRouters from './routes/task.route.js'
dotenv.config()

const PORT=process.env.PORT;

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  // message(res, OK, "Welcome to Backend API of TGH Todo-App");
  res.send("Welcome to Backend API of TGH Todo-App");
});

// importing all taskrouts
app.use('/api/tasks',taskRouters)

// Connect to MongoDb
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
    connect();
});


