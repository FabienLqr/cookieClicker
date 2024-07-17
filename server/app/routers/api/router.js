const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const playerRouter = require("./player/router");
const authRouter = require("./auths/router");
const upgradeRouter = require("./upgrade/router");

router.use("/items", itemsRouter);
router.use("/auths", authRouter);
router.use("/player", playerRouter);
router.use("/upgrade", upgradeRouter);

/* ************************************************************************* */

module.exports = router;
