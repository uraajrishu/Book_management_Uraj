const express = require('express');
const router = express.Router();
const {userLogin,createUser} = require("../controllers/userController")
const { createBook,getBooks, getBooksBYId, updateBook, deleteBook } = require("../controllers/bookController")
const {updatereview}=require("../controllers/reviewController")
// const middleware = require('../middleware/middleware')


//User routes
router.post("/login", userLogin);
router.post("/register", createUser);

//Book routes
router.post("/books", createBook);
router.get("/books", getBooks);
router.get("/books/:bookId", getBooksBYId);
router.put("/books/:bookId",updateBook);
router.delete("/books/:bookId", deleteBook);
router.put("/books/:bookId/review/:reviewId",updatereview);



module.exports = router;