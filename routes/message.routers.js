const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/message.controller')

router.get('/', function (req, res) {
    try {
        const message = MessageController.getMessage()
        res.send(message)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.post('/input', function (req, res) {
    try {
        const response = MessageController.newMessage(req)
        res.status(response.status)
        res.send(response.send)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.put('/input/:id', function (req, res) {
    try {
        const response = MessageController.updateMessage(req)
        res.status(response.status)
        res.send(response.send)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.delete('/input/:id', function (req, res) {
    try {
        const response = MessageController.deleteMessage(req)
        res.send(response)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

module.exports = router;