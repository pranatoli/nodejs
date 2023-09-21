const express = require('express');
const router = express.Router();
const PeopleController = require('../controllers/people.controller');

router.get('/', async (req, res) => {
    try {
        const people = await PeopleController.getPeople()
        res.send(people)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.post('/user', async (req, res) => {
    try {
        const newPeople = await PeopleController.createPeople(req)
        res.status(201)
        res.send(newPeople)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.put('/user/:id', async (req, res) => {
    try {
        const answer = await PeopleController.updatePeople(req)
        res.status(answer.status)
        res.send(answer.send)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.delete('/user/:id', async (req, res) => {
    try {
        const response = await PeopleController.deletePeople(req)
        res.send(response)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

module.exports = router;