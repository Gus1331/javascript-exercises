let users = [
    newUser("Jonas", 45),
    newUser("Yian", 13),
    newUser("Gus", 19),
    newUser("Owen", 27),
]

function newUser(name, age){
    return {name , age};
}

function isAdult(user){
    return user.age > 17;
}

console.log(users.filter(isAdult));