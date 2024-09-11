import express from "express";
import {
  postBooks,
  getBooks,
  getABook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.post("/", postBooks);
router.get("/", getBooks);
router.get("/:id", getABook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
