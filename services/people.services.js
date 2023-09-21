const people = [
    { id: 1, name: "Pasha", isMan: true, age: 25 },
    { id: 2, name: "Ivan", isMan: true, age: 5 },
    { id: 3, name: "Dima", isMan: true, age: 75 }
];

class PeopleService {
    getPeople() {
        return new Promise((res, rej) => {
            res(people);
        })
    }
}

module.exports = new PeopleService();