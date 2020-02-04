'use strict'

//Prubas Let y var

//Prueba con var
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

//Prueba con Let
var texto = "Página de juegos WillGames.com"
console.log(texto); //valor js

if(true){
    let texto = "Curso laravel";
    console.log(texto); //valor laravel
}

 console.log(texto); // valor js