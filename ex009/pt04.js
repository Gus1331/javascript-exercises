

console.log("Bem vindo ao sistema do CineMax3D\nDados dos usuários cadastrados:\n");

function cadastrar(name,age,sex){
    return{
        nome: name,
        idade: age,
        sexo: sex,
        desc: function(){
            return this.idade <= 18 ? true : false;
        }
    };
};

var pessoas = [
    cadastrar("Miles M.   ", 16, "Masc"),
    cadastrar("Peter B.   ", 45, "Masc"),
    cadastrar("Rio M.     ", 39, "Fem "),
    cadastrar("Gus O.     ", 18, "Masc"),
    cadastrar("Samantha K.", 28, "Fem ")
];

var usuario = pessoas;

for (usuario of pessoas){
    console.log("Nome: "+usuario.nome+"   Idade: "+usuario.idade+"   Sexo: "+usuario.sexo);

    switch(usuario.desc()){
        case true :
            console.log("   Com direito à desconto :)\n");
            break
        case false :
            console.log("   Sem direito à desconto :(\n");
            break
        default :
            console.log("ERROR");
            break
    };
};
