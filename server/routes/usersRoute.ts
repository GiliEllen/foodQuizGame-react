import express from "express";
const router = express.Router();
import {
  getAllUsers,
  addUser,
  login,
  getUserFromDB,
} from "../controlers/usersCont";

router
  .get("/get-users", getAllUsers)
  .post("/addUser", addUser)
  .post("/login", login)
  .post("/getUser", getUserFromDB)

export default router;
