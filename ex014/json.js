// JvaScript Object Notation

let a = {name: "Boo", age: 25};
let b = [22, 25, "85"];
let c = '{"name":"nita","age":19}';
let d = '["22", 34, 45]';

let a2 = JSON.stringify(a);     //to string
let b2 = JSON.stringify(b);
let c2 = JSON.parse(c);         //to javascript object
let d2 = JSON.parse(d);

console.log(
    a2+"\n"+
    b2+"\n"+
    c2.name+" "+c2.age+"\n"+
    d2+"\n"
);