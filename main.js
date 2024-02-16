import {oszthato} from "/fuggvenyek.js";
// console.log(oszthato(15));

// ************ valtozok lathatosaga ***************
let valt1; /* deklaráció */
function fv1(){
    {
        let valt1 = 25;
        console.log(`blokkon belól valt1: ${valt1}`)
    }
    let valt1=10; /* lokális változó */
    console.log(`fv1-en belül valt1: ${valt1}`);
    
}

valt1=5; /* globális változó */ /* inicializálás */ 
//console.log(`főprogramban valt1: ${valt1}`);
//fv1()

function fv2(){
    for (let index = 0; index < 3; index++) {
        console.log(index)
        
    }
    // console.log(index)
}

fv2()

function fv3(){
    let index = 0;
    while(index < 3) {
        console.log(index)
        index++
        
    }
    console.log(index)
}

const ertek=1000; /* constant, értéke nem változtatható meg. láthatósága olyan mint a "let" blokkszintű, deklaráláskor értéket kell adni neki. */
const nev="Valaki";
// nev="Más valaki"
// console.log(nev)
