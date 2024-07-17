const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const authRouter = require("./auths/router");
const itemsRouter = require("./items/router");
const playerRouter = require("./player/router");
const upgradeRouter = require("./upgrade/router");
const achatRouter = require("./achat/router");

router.use("/auths", authRouter);
router.use("/items", itemsRouter);
router.use("/player", playerRouter);
router.use("/upgrade", upgradeRouter);
router.use("/achat", achatRouter);

/* ************************************************************************* */

module.exports = router;
