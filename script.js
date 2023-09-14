// MODULO 09 AULA 01 À 24 - Intervalos, Manipulações, Arrow, Ajax, etc
// *Intervalos (1/2)
// let timer;

// function comecar() {
//      timer = setInterval(showTime, 1000);

// }

// function parar() {
//     clearInterval(timer);

// }

// function showTime() {
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     let txt = h+':'+m+':'+s;

//     document.querySelector('.demo').innerHTML = txt;
// }

//  *Intervalos (2/2)
// let timer;
// function rodar() {
//   timer =  setTimeout(function() {
//        document.querySelector('.demo').innerHTML = 'Rodou setTimeout!'
//     }, 2000);
// }
// function parar() {
//     clearTimeout(timer);
// }

// Template Strings
// let nome = 'Sérgio';
// let idade = 53;

// // let frase = 'Meu nome é '+nome+', e eu tenho '+idade+' anos, e ano que vem eu farei '+(idade + 1)+ 'anos';

// let frase = `Meu nome é ${nome} e eu tenho ${idade} anos e ano que vem eu farei ${idade + 1} anos! `;

// console.log(frase);

// *Descontruindo Objetos (1/2)(2/2)

// let pessoa = {
//   nome: "Sérgio",
//   // sobrenome: 'Lima',
//   idade: 53,
//   social: {
//     facebook: "sdlima",
//     instagram: {
//       url: "@sdlima",
//       seguidores: 1000,
//     },
//   },
// };

// function pegarNomeCompleto({
//   nome,
//   sobrenome = "Santana",
//   social: {
//     instagram: { url: instagram },
//   },
// }) {
//   return `${nome} ${sobrenome} (Siga em: ${instagram} )`;
// }

// let {nome, idade, social:{instagram}} = pessoa;
// Descontrução com uso de função

// console.log(pegarNomeCompleto(pessoa));

// *Desconstruindo Arrays

// let info = ['Sérgio Lima', 'Sérgio', 'Lima', '@sdlima'];

// let [, , , instagram] = info;

// console.log( instagram);

// *Descontrução com uso de função | 3Setar um novo nome para os dados que virão do array e vão se tornar uma variável.
// function criar() {
//     return[1,2,3];
// }
// let [a,b,c] = criar();

// console.log(a,b,c);

// *Arrow Functions | função anonima === função arrow não usa o OO this.
/*function somar(x, y) {
    return x + y;
}
console.log(10 + 20); */

/*let somar = function(x, y) {
    return x + y;
}

console.log(10 + 20); 


let somar = (x, y) => {
    return x + y;
}
console.log(somar(100, 200));


let letrasNome = (nome) => {
    return nome.length;
}
console.log(letrasNome('Sérgio'))



let letrasNome = nome => nome.length;

console.log(letrasNome('Sérgio'));
*/

// *Operador Spread(...nomeDaFuncao | array) funciona para (array end Objeto).
/*
let numeros = [...1,2,3,4];

let outros = [numeros, 5,6,7,8,9];

console.log(outros)

// spread Operator com OO
let info = {
    nome: 'Sérgio',
    sobreNome: 'Lima',
    idade: 53
};
let novaInfo = {
    ...info, 
    cidade: 'Salvador',
    estado: 'Bahia',
    pais: 'Brasil'
};

console.log(novaInfo);

// spread Operator com function
function addInfo(info) {
    let novasInfo = {
        ...info,
        status: 0
    };
    return novasInfo;
}

console.log(addInfo({nome:'Sérgio', sobrenome: 'Santana'}));

// *Operador Rest(pouco usado)
function adicionar(...numeros) {
    console.log(numeros);
}
adicionar(5, 6, 7, 8, 8, 9, 10);
// Rest com nomes
function adicionar(...nomes) {
    console.log(nomes);
}
adicionar('Sérgio', 'Silvio', 'Reinaldo');

// *Spread com Rest
function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];
    return novoConjunto;
}

let nomes = ['Sérgio', 'Silvio'];

let outrosNomes = adicionar(nomes, 'Reinaldo', 'Gilton', 'Luiz', 'João');

console.log(outrosNomes);
*/

//*Modulo: 09 - aula = 22 | Includes e Repeat == ecma Script-6
/**
 * INCLUDES verifica com retorno de true ou false
let lista = ['ovo', 'café', 'arroz', 'feijão', 'macarrao'];

    console.log(lista.includes('ovo'))
    let nome = 'Bonieky';
    console.log(nome.includes('B'));// case sensitive
    let nome = 'Sérgio ';
    console.log(nome.repeat(2))
 */
/**
 * Objeto: Key, Values e Entries
let lista = {
    nome:'Sérgio',
    idade: 53
}
// let lista = [1,2,3];

console.log(typeof lista);
let lista = ['ovo', 'café', 'arroz', 'feijão', 'macarrao'];

// console.log(Object.keys(lista) );

// console.log(Object.values(lista) );

console.log(Object.entries(lista) );

let pessoa = {
    nome:'Sérgio',
    sobreNome:'Santana',
    idade:53
};

console.log(Object.keys(pessoa) );
console.log(Object.values(pessoa) );
console.log(Object.entries(pessoa) );
 */

/**
 * String com padStart, padEnd
 */
let cartao = '1234123412341234';

let lastDigits = cartao.slice(0,3);

let cartaoMascarado = lastDigits.padEnd(16, '*') ; // QUANTIDADE DE CARACTERS, SIMBOLO

console.log(`Este é seu cartão? ${cartaoMascarado}`);   
