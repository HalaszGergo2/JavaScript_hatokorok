export function oszthato(szam){
    let otteloszthato = false;
    if(Number.isInteger(szam)){
if(szam <= Number.MAX_SAFE_INTEGER){

    if(szam % 5 === 0){
        otteloszthato = true;
    }
    else{
        otteloszthato = "Túl nagy a szám"
    }
    
}else{
    otteloszthato = "nem szám!"
}
}
return otteloszthato
}
function otteloszthatoteszt(){
    //teszteles
    // 0 -> true
    console.log('szam=0-> true')
    console.log(`szam=0-> ${oszthato(0)}`)
    
    // 3 -> false
    console.log('szam=3-> false')
    console.log(`szam=3-> ${oszthato(3)}`)
    
    // 1 -> false
    console.log('szam=1-> false')
    console.log(`szam=1-> ${oszthato(1)}`)
    
    // 2 -> false
    console.log('szam=2-> false')
    console.log(`szam=2-> ${oszthato(2)}`)
    
    // 3 -> false
    console.log('szam=3-> false')
    console.log(`szam=3-> ${oszthato(3)}`)
    
    // 4 -> false
    console.log('szam=4-> false')
    console.log(`szam=4-> ${oszthato(4)}`)
    
    // 5 -> true
    console.log('szam=5-> true')
    console.log(`szam=5-> ${oszthato(5)}`)
    
    // 5555555555555555555 -> true
    console.log('szam=5555555555555555555-> true')
    console.log(`szam=5555555555555555555-> ${oszthato(5555555555555555555)}`)
    
    // 55.68 -> false
    console.log('szam=55.68-> false')
    console.log(`szam=55.68-> ${oszthato(55.68)}`)
    
    
    // -25 -> true
    console.log('szam=-25-> true')
    console.log(`szam=-25-> ${oszthato(-25)}`)
    
    
    // rókarudi -> le se fut | hibás
    console.log('rókarudi-> hiba')
    console.log(`rókarudi-> ${oszthato("rókarudi")}`)
    
    // "5" -> true
    console.log('szam="5"-> nem szám!')
    console.log(`szam="5"-> ${oszthato("5")}`)
    }