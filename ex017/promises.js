let users = [
    "John",
    "Marcia",
    "Paul",
    "Alice",
    "Coraline",
    "Wendell",
];

function insertUser(name){
    let insert = new Promise(function(resolve,reject){
        users.push(name);
        let error = false;
        if (!error){
            resolve();
            console.log(users);
        }
        else{
            reject({errorID: "12345678"});
        };
    });
    return insert;
};
let user = prompt("Seu nome?");
insertUser(user)
    .catch(function(error) {
        console.log(error);
    });