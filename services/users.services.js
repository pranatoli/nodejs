const { ifError } = require('assert');
const { error } = require('console');
const fs = require('fs')

class UsersServices {
    getUsers() {
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (error, data) => {
                if (error) throw error;
                const arrUsers = JSON.parse(data)
                res(arrUsers)
            })
        })
    }
    getUsersByGender(req) {
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (error, data) => {
                if (error) throw error;
                const arrUsers = JSON.parse(data);
                const filterUsers = arrUsers.filter(i => i.gender == req.params.gender)
                res(filterUsers)
            })
        })
    }

    getFiltredUsersByAge(req) {
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (error, data) => {
                if (error) throw error;
                const arrUsers = JSON.parse(data);
                const { min, max } = req.query;
                console.log(min);
                const filtredUsers = arrUsers.filter(i => i.age >= min && i.age <= max);
                res(filtredUsers);
            })
        })
    }

    createUser(req) {
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (error, data) => {
                if (error) throw error;
                const arrUsers = JSON.parse(data);
                let lastId = arrUsers.at(-1).id + 1;// create unical id
                req.body.id = lastId; // create unical id
                arrUsers.push(req.body);
                fs.writeFile('data.json', JSON.stringify(arrUsers), (error) => {
                    if (error) throw error;
                    fs.readFile('data.json', 'utf8', (error, data) => {
                        const lastUser = JSON.parse(data).at(-1)
                        res(lastUser)
                    })
                });

            })
        })
    }

    deleteUser(req) {
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (error, data) => {
                if (error) throw error;
                const arrUsers = JSON.parse(data);
                const id = arrUsers.findIndex((i) => i.id == req.params.id)
                if (id != -1) {
                    arrUsers.splice(id, 1);
                    fs.writeFile('data.json', JSON.stringify(arrUsers), (error) => {
                        if (error) throw error;
                        res(true)
                    });
                } else res(false);
            })
        })
    }
}

module.exports = new UsersServices()