const express = require("express");
const router = express.Router();
const peopleRouters = require("./people.routers");
const messageRouters = require("./message.routers")

router.use("/people", peopleRouters);
router.use("/message", messageRouters)

module.exports = router;