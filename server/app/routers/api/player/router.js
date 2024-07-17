const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, edit, multiple, add, destroy } = require("../../../controllers/playerActions");
const { hashPassword } = require("../../../services/auth");
const { isAuth } = require("../../../services/isAuth");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// edit le nombre de cookies
router.put("/:id", isAuth, edit);

// edit le multiplicateur
router.put("/multiple/:id", isAuth, multiple);

// Route to add a new player
router.post("/", hashPassword, add);

router.delete("/:id", isAuth, destroy);

/* ************************************************************************* */

module.exports = router;
