const MessageService = require('../services/message.services')

class Message {
    constructor(id, text) {
        this.id = id
        this.text = text
    }
}

class MessageController {
    async getMessage() {
        const message = await MessageService.getMessage()
        return message
    }
    async newMessage(req) {
        const message = await MessageService.getMessage()
        const { id, text } = req.body
        const txt = new Message(id, text)
        message.push(txt)
        const response = { status: 200, send: message }
        return response
    }
    async updateMessage(req) {
        const message = await MessageService.getMessage()
        const response = { status: 200, send: message }
        const id = message.findIndex((i) => i.id == req.params.id)
        if (id != -1) {
            const updateMessage = message.map((i) => (i.id == req.body.id ? req.body : i))
            message.splice(0, message.length, ...updateMessage)
            response.status = 200
            response.send = message
        } else {
            message.push(req.body)
            response.status = 201
            response.send = message.at(-1)
        }
        return response
    }
    async deleteMessage(req) {
        const message = await MessageService.getMessage()
        const id = message.findIndex((i) => i.id == req.query.id)
        if (id != -1) {
            message.splice(id, 1)
            return true
        } else return false
    }
}

module.exports = new MessageController()