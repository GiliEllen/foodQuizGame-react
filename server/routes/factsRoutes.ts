import express from "express";
const router = express.Router();
import {
  getAllFacts,
} from "../controlers/factsCont";

router
  .get("/getAllFacts", getAllFacts)

export default router;
