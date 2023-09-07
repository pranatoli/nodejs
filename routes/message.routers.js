const express = require('express');
const router = express.Router();

class Message {
    constructor(id, text) {
        this.id = id
        this.text = text
    }
}

const message = [
    { id: 1, text: 'asfdsfsdf' },
    { id: 2, text: 'dfdgdfg' },
    { id: 3, text: 'dfsdkfskfo' }
];

router.get('/', function (req, res) {
    res.send(message)
})

router.post('/input', function (req, res) {
    const { id, text } = req.body
    const txt = new Message(id, text)
    message.push(txt)
    res.status(201)
    res.send(message.at(-1))
})

router.put('/input/:id', function (req, res) {
    const id = message.findIndex((i) => i.id == req.body.id)
    if (id != -1) {
        const updateMessage = message.map((i) => (i.id == req.body.id ? req.body : i))
        message.splice(0, message.length, ...updateMessage)
        res.status(200)
        res.send(message)
    } else {
        message.push(req.body)
        res.status(201)
        res.send(message.at(-1))
    }
})

router.delete('/input/:id', function (req, res) {
    const id = message.findIndex((i) => i.id == req.query.id)
    if (id != -1) {
        message.splice(id, 1)
        res.send(true)
    } else res.send(false)
})

module.exports = router;