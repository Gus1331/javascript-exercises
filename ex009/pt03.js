// Objetos pt3

function soma(){
    return this.n1 + this.n2;
};

obj1 = {
    n1: 25,
    n2: 53,
    calc: soma
}

obj2 = {
    n1: 13,
    n2: 31,
    calc: soma
}

obj3= {
    fun1: function (n1,n2) {
        return n1 * n2;
    },
    fun2: function (n1,n1) {
        return n1 / n2;
    }
}

console.log(obj1.soma)