const express = require("express");
const router = express.Router();

const bookCtrl = require("../controllers/book");

// router.post("", (req, res) => {
//   const bookData = req.body;
//   console.log(bookData);
//   const book = new Book(bookData);
//   book.save((err, createdBook) => {
//     if (err) {
//       return res.status(422).send(err);
//     }

//     return res.json(createdBook);
//   });
// });

router.post("", bookCtrl.saveBook);

router.get("", bookCtrl.getBooks);

router.patch("/:id", bookCtrl.updateBook);

router.delete("/:id", bookCtrl.delteBook);

module.exports = router;
