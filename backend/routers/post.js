const { createPost } = require("../controllers/post");

const router = require("express").Router();

router.post("/create", createPost);
router.get("/latest");

module.exports = router;
