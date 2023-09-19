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

class MessageController {
    getMessage() {
        return message
    }
    newMessage(req) {
        const { id, text } = req.body
        const txt = new Message(id, text)
        message.push(txt)
        const response = { status: 200, send: message }
        return response
    }
    updateMessage(req) {
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
    deleteMessage(req) {
        const id = message.findIndex((i) => i.id == req.query.id)
        if (id != -1) {
            message.splice(id, 1)
            return true
        } else return false
    }
}

module.exports = new MessageController()