class People {
    constructor(id, name, isMan, age) {
        this.id = id
        this.name = name
        this.isMan = isMan
        this.age = age
    }
}

const people = [
    { id: 1, name: "Pasha", isMan: true, age: 25 },
    { id: 2, name: "Ivan", isMan: true, age: 5 },
    { id: 3, name: "Dima", isMan: true, age: 75 }
];

class PeopleController {
    getPeople() {
        return people;
    }
    createPeople(req) {
        const { id, name, isMan, age } = req.body
        const user = new People(id, name, isMan, age)
        people.push(user)
        return people.at(-1)
    }
    updatePeople(req) {
        const response = { status: 200, send: people }
        const id = people.findIndex((i) => i.id == req.params.id)
        if (id != -1) {
            const updatePeople = people.map((i) => (i.id == req.params.id ? req.body : i))
            people.splice(0, people.length, ...updatePeople)
            return response
        } else {
            people.push(req.body)
            response.status = 201
            response.send = people.at(-1)
            return response
        }
    }

    deletePeople(req) {
        const id = people.findIndex((i) => i.id == req.query.id)
        if (id != -1) {
            people.splice(id, 1)
            return true
        } else return false
    }
}

module.exports = new PeopleController();