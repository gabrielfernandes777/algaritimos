const precosLivre = [25, 15, 30,50, 45, 20];

let atual = 0;
let maisbarato = 0;

for(let atual = 0; atual < precosLivre.length; atual ++){
    if(precosLivre [atual] <precosLivre [maisbarato]){
        maisbarato = atual
    }
}
console.log( `O livreo mais barato custa ${precosLivre [maisbarato]}`)