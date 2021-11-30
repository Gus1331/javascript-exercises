//Date(year, month, day, hours, minutes, seconds, milliseconds);

var dat1 = new Date ("11/29/2021");
var dat2 = new Date ();

var contmonth = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]
var contday = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
]

console.log("Este exercicío foi feito em: "+ dat1.getDate()+" de "+ contmonth[dat1.getMonth()]+ " de "+dat1.getFullYear()+"\n");

console.log("Agora é  "+ dat2.getDate()+" de "+ contmonth[dat2.getMonth()]+" do ano de "+dat2.getFullYear()+", "+contday[dat2.getDay()]+" "+dat2.getHours()+":"+dat2.getMinutes());
