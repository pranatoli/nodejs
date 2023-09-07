const express = require('express');
const router = express.Router();

class People {
    constructor(id, name, isMan, age) {
        this.id = id
        this.name = name
        this.isMan = isMan
        this.age = age
    }
}

const people = [
    { id: 1, name: "Pasha", isMan: true, age: 25 },
    { id: 2, name: "Ivan", isMan: true, age: 5 },
    { id: 3, name: "Dima", isMan: true, age: 75 }
];

router.get('/', function (req, res) {
    res.send(people)
})

router.post('/user', function (req, res) {
    const { id, name, isMan, age } = req.body
    const user = new People(id, name, isMan, age)
    people.push(user)
    res.status(201)
    res.send(people.at(-1))
})

router.put('/user/:id', function (req, res) {
    const id = people.findIndex((i) => i.id == req.body.id)
    if (id != -1) {
        const updatePeople = people.map((i) => (i.id == req.body.id ? req.body : i))
        people.splice(0, people.length, ...updatePeople)
        res.status(200)
        res.send(people)
    } else {
        people.push(req.body)
        res.status(201)
        res.send(people.at(-1))
    }
})

router.delete('/user/:id', function (req, res) {
    const id = people.findIndex((i) => i.id == req.query.id)
    if (id != -1) {
        people.splice(id, 1)
        res.send(true)
    } else res.send(false)
})

module.exports = router;