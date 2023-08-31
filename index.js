let express = require('express')
let app = express()
const port = 3000
const bodyParser = require('body-parser')

const users = [
    { id: 1, name: "Pasha", isMan: true, age: 25 },
    { id: 2, name: "Ivan", isMan: true, age: 17 },
    { id: 3, name: "Dima", isMan: true, age: 55 },
    { id: 4, name: "Inna", isMan: false, age: 25 },
    { id: 5, name: "Kate", isMan: false, age: 34 },
]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/users', function (req, res) {
    res.send(users)
})

app.get('/users/:gender', function (req, res) {
    const filterUsers = users.filter((i) => i.isMan == req.body.isMan)
    res.send(filterUsers)
})

app.get('/filtredUsers', function (req, res) {
    let min = req.query.min
    let max = req.query.max
    const filtredAge = users.filter((i) => i.age >= min && i.age <= max)
    res.send(filtredAge)
})

app.post('/user', function (req, res) {
    users.push(req.body)
    res.status(201)
    res.send(users.at(-1))
})

app.put('/user/:id', function (req, res) {
    const id = users.findIndex((i) => i.id == req.body.id)
    if (id != -1) {
        const updateUsers = users.map((i) => (i.id == req.body.id ? req.body : i))
        users.splice(0, users.length, ...updateUsers)
        res.status(200)
        res.send(users)
    } else {
        users.push(req.body)
        res.status(201)
        res.send(users.at(-1))
    }
})

app.patch('/user/:id', function (req, res) {
    const updateUsers = users.map((i) => i.id == req.body.id ? { ...i, name: req.body.name } : i)
    users.splice(0, users.length, ...updateUsers)
    const result = users.filter(i => i.id == req.body.id)
    res.send(result)
})

app.delete('/user/:id', function (req, res) {
    const id = users.findIndex((i) => i.id == req.body.id)
    if (id != -1) {
        users.splice(id, 1)
        res.send(true)
    } else res.send(false)
})

app.listen(port, () => console.log('server started'))

// console.log(JSON.stringify({ id: 1, name: "Kate", isMan: false, age: 34 }));