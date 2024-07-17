const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, readPlayer, readUpgrade, add } = require("../../../controllers/achatActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

router.get("/player/:id", readPlayer);

router.get("/upgrade/:id", readUpgrade);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
