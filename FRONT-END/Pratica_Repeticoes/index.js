//let dia = document.getElementById("dia") jeito antigo de fazer
//let dia = document.querySelector("#dia") //Não especifica oque o elemento é

let meses = ["Janeiro", "Favereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


for(let d = 1; d < 32; d++){
    dia.innerHTML += `<option>${d}</option>`;
}

for(let m = 0; m < 12; m++){
    mes.innerHTML += `<option>${meses[m]}</option>`;
}

for(let a = 2024; a > 1974; a--){
    ano.innerHTML += `<option>${a}</option>`;
}