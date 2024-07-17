const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, edit, multiple, add, destroy } = require("../../../controllers/playerActions");
const { hashPassword } = require("../../../services/auth");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// edit le nombre de cookies
router.put("/:id", edit);

// edit le multiplicateur
router.put("/multiple/:id", multiple);

// Route to add a new item
router.post("/", hashPassword, add);

router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
