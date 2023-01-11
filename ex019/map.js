let users = [
    newUser("Geovanna", 17),
    newUser("Adam", 38),
    newUser("Vivian", 10),
    newUser("Philip", 7),
    newUser("Kaytlin", 22),
]

function newUser(name, age){
    return {name, age};
}

console.log(users)

function ageIn5Years(user){
    return {name: user.name, futureAge: user.age + 5};
}

console.log(users.map(ageIn5Years));