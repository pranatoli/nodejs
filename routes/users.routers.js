const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: "Pasha", isMan: true, age: 25 },
    { id: 2, name: "Ivan", isMan: true, age: 17 },
    { id: 3, name: "Dima", isMan: true, age: 55 },
    { id: 4, name: "Inna", isMan: false, age: 25 },
    { id: 5, name: "Kate", isMan: false, age: 34 },
]

router.get('/', function (req, res) {
    res.send(users)
})

module.exports = router;