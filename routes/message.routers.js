const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/message.controller')

router.get('/', async (req, res) => {
    try {
        const message = await MessageController.getMessage()
        res.send(message)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.post('/input', async (req, res) => {
    try {
        const response = await MessageController.newMessage(req)
        res.status(response.status)
        res.send(response.send)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.put('/input/:id', async (req, res) => {
    try {
        const response = await MessageController.updateMessage(req)
        res.status(response.status)
        res.send(response.send)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

router.delete('/input/:id', async (req, res) => {
    try {
        const response = await MessageController.deleteMessage(req)
        res.send(response)
    } catch (error) {
        res.send('error: ' + error.message)
    }
})

module.exports = router;