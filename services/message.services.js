const message = [
    { id: 1, text: 'asfdsfsdf' },
    { id: 2, text: 'dfdgdfg' },
    { id: 3, text: 'dfsdkfskfo' }
];

class MessageService {
    getMessage() {
        return new Promise((res, rej) => {
            res(message)
        })
    }
}

module.exports = new MessageService()