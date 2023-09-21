const PeopleService = require('../services/people.services');

class People {
    constructor(id, name, isMan, age) {
        this.id = id
        this.name = name
        this.isMan = isMan
        this.age = age
    }
}

class PeopleController {
    async getPeople() {
        const people = await PeopleService.getPeople()
        return people;
    }
    async createPeople(req) {
        const people = await PeopleService.getPeople()
        const { id, name, isMan, age } = req.body
        const user = new People(id, name, isMan, age)
        people.push(user)
        return people.at(-1)
    }
    async updatePeople(req) {
        const people = await PeopleService.getPeople()
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

    async deletePeople(req) {
        const people = await PeopleService.getPeople()
        const id = people.findIndex((i) => i.id == req.query.id)
        if (id != -1) {
            people.splice(id, 1)
            return true
        } else return false
    }
}

module.exports = new PeopleController();