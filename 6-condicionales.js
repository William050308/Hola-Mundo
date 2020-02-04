'use strict'

//Condicional IF
//Si A es igual a B entoces haz algo

var edad = 33;
var nombre  = 'David Suarez';

//Operadores <= >= != ==

if(edad >= 15){
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if(edad == 33){
        console.log('Todavia eres millenial');
    }else if(edad >= 70){
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres millenial');
    }
}else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

var year = 2018;

if(year != 2016){
    console.log("El año no es 2016 realmente es: " + year);
}

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era acutal");
}else{
    console.log("Estamos en la era post-moderna");
}

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registado");
}