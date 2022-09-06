import express from "express";
import mongoose from "mongoose";
const app = express();
const port: number = 4000;

app.use(express.static("client/build"));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Gili-Admin:rdsdyne6RdSdYnE6@cluster0.7mbcr.mongodb.net/factsgame?retryWrites=true&w=majority"
).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});

import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute);

import factsRoute from "./routes/factsRoutes";
app.use("/facts", factsRoute)


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
