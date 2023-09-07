let express = require('express');
let app = express();
const port = 3000;
const routes = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', routes)

// app.get('/users/:gender', function (req, res) {
//     const filterUsers = users.filter((i) => i.isMan == req.body.isMan)
//     res.send(filterUsers)
// })

// app.get('/filtredUsers', function (req, res) {
//     let min = req.query.min
//     let max = req.query.max
//     const filtredAge = users.filter((i) => i.age >= min && i.age <= max)
//     res.send(filtredAge)
// })

// app.patch('/user/:id', function (req, res) {
//     const updateUsers = users.map((i) => i.id == req.body.id ? { ...i, name: req.body.name } : i)
//     users.splice(0, users.length, ...updateUsers)
//     const result = users.filter(i => i.id == req.body.id)
//     res.send(result)
// })

// app.delete('/user/:id', function (req, res) {
//     const id = users.findIndex((i) => i.id == req.body.id)
//     if (id != -1) {
//         users.splice(id, 1)
//         res.send(true)
//     } else res.send(false)
// })

app.listen(port, () => console.log('server started on port ' + port))

// console.log(JSON.stringify({ id: 1, name: "Kate", isMan: false, age: 34 }));