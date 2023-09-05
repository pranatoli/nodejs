const express = require("express")
const router = express.Router()
const usersRouters = require("./users.routers")

router.use("/users", usersRouters)

module.exports = router