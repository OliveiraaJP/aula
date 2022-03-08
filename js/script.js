function mostrarNome(texto = "prazer em lhe conhecer") {
    let nome = document.querySelector('#nome').value;
    const boxresposta = document.querySelector(".respostas")
    boxresposta.innerHTML = `
    <span>
    ${nome}, ${texto}
    </span>
    `

}




// function soma(a, b, c) {

//     console.log(somados);
//     var somados = a + b + c
// }

//soma(1,2,3)


//console.log(amigo);
//console.log(inimigo);
//let amigo = "joao"

// qualNossoTutor()

// function qualNossoTutor(){
// 	console.log("Vini")
//}



// let numeros = [5, 6, 7]

// function consoleNumeros() {
//     for (let i = 0; i < numeros.length; i++) {
//         console.log(numeros[i]);

//     }
// }


// function consoleNumeros(){
//     numeros.forEach((numero, index, array) => {
//         console.log("O numero: " + numero);
//         console.log("O index: " +  index);
//         console.log("O array " + array);
//         console.log("-------------------");    
//     })}


// function consoleNumeros(){
//     for (const num of numeros) {
//         console.log(num);
        
//     }
// }

//consoleNumeros()


// let objetosLegais = {
//     nome: 'Vini',
//     profissao: 'Tutor',
//     idade: 'Nao sei'
// }

// function consoleObjeto(){
//     for (let index in objetosLegais) {
//         console.log(index);
//     }
// }

// consoleObjeto()


// let {nome: nomeNovo, idade: idadeNovo} = objetosLegais

// console.log(nomeNovo)
// console.log(idadeNovo);


// var anjo = 'gabriel'
// var anjo = 'joao'
// console.log(anjo);

// var comida = 'pizza'
// comida = 'batata'
// console.log(comida);