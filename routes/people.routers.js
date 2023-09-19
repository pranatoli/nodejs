const express = require('express');
const router = express.Router();
const PeopleController = require('../controllers/people.controller');

router.get('/', function (req, res) {
    try {
        const people = PeopleController.getPeople()
        res.send(people)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.post('/user', function (req, res) {
    try {
        const newPeople = PeopleController.createPeople(req)
        res.status(201)
        res.send(newPeople)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.put('/user/:id', function (req, res) {
    try {
        const answer = PeopleController.updatePeople(req)
        res.status(answer.status)
        res.send(answer.send)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.delete('/user/:id', function (req, res) {
    try {
        const response = PeopleController.deletePeople(req)
        res.send(response)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

module.exports = router;