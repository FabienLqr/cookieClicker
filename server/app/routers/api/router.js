const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const playerRouter = require("./player/router");
const authRouter = require("./auths/router");

router.use("/items", itemsRouter);
router.use("/player", playerRouter);

/* ************************************************************************* */

module.exports = router;
