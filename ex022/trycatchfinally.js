
try{ // Tenta executar um bloco, caso não consiga o arquivo prossegue
    console.log(userName);

    if(userName == ""){
        throw("user name cannot be empty"); // Joga um erro como exceção
    }
}
catch(error){ // Pega o erro, e "trata"
    console.log("Error in:", error); // imprimindo o erro
}
finally{ // opcional, executa mesmo se o try não conseguir executar o bloco
    console.log("Welcome");
}