// ===== Student 1 =====
let student1 = {
    name: "Tung",
    family: "Nguyen",
    age: 18,
    scores: [9, 10, 8],
    birth: {
        year: 2008,
        month: 11,
        day: 1
    },
    getFullName: function () {
        return this.family + " " + this.name
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length
    }
}


let student2 = {
    name: "Do",
    family: "Le",
    age: 19,
    scores: [7, 8, 9],
    birth: {
        year: 2004,
        month: 5,
        day: 12
    },
    getFullName: function () {
        return this.family + " " + this.name
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length
    }
}


let student3 = {
    name: "Quan",
    family: "Nguyen",
    age: 20,
    scores: [6, 7, 8, 9],
    birth: {
        year: 2006,
        month: 3,
        day: 20
    },
    getFullName: function () {
        return this.family + " " + this.name
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length
    }
}


let json1 = '{"name":"Tung","family":"Nguyen","age":18,"scores":[9,10,8],"birth":{"year":2008,"month":11,"day":1}}'
let json2 = '{"name":"Quan","family":"Nguyen","age":19,"scores":[7,8,9],"birth":{"year":2004,"month":5,"day":12}}'
let json3 = '{"name":"Do","family":"Le","age":20,"scores":[6,7,8,9],"birth":{"year":2006,"month":3,"day":20}}'


let obj1 = JSON.parse(json1)
let obj2 = JSON.parse(json2)
let obj3 = JSON.parse(json3)

console.log(obj1)
console.log(obj2)
console.log(obj3)
