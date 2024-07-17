const express = require("express");

const router = express.Router();

const { isAuth } = require("../../../services/isAuth");
const { roleControle } = require("../../../services/admin");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, edit, add, destroy } = require("../../../controllers/upgradeActions");

// Route to get a list of items
router.get("/", isAuth, browse);

// Route to get a specific item by ID
router.get("/:id", isAuth, read);

router.put("/:id", isAuth, roleControle, edit);

// Route to add a new item
router.post("/", isAuth, roleControle, add);

router.delete("/:id", isAuth, roleControle, destroy);

/* ************************************************************************* */

module.exports = router;
