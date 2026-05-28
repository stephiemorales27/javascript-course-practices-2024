/* EJERCICIO 1*/ 
for(let i= 1 ;  i <=100; i++) {
    if(esPrimo(i)){ 
        console.log(i + "es primo"); 
    }else{  
        console.log(i + "no es primo");
    }     
}  
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
/* EJERCICIO 2 */  
var nota= "9"; 
var respuesta="";
switch(nota){ 
 case(nota >=0 && nota <3):
    respuesta="Muy deficiente";
    break;
    case(nota >=3 && nota <5):
    respuesta = "Insuficiente";
    break; 
        case(nota>=5 && nota <6):
        respuesta ="Suficiente";
        break; 
        case(nota >=6 && nota <7):
        respuesta = "Bien";
        break;
    case(nota >=7 && nota <9):
    respuesta = "Notable ";
    break;  
    case (nota >=9 && nota <=10): 
    respuesta="Sobresaliente";
    break;    
    default: 
        console.log(`Su nota es: ${nota}` );
}
/* EJERCICIO 3*/ 
const numMes=7;
switch(numMes) { 
    case 1: 
    console.log("Enero"); 
    break;
    case 2: 
    console.log( "Febrero" ); 
    break; 
    case 3: 
    console.log( "Marzo" ) ; 
    break; 
    case 4:  
    console.log( "Abril" ); 
    break;  
    case 5:  
    console.log("Mayo") ;
    break; 
    case 6:  
    console.log("Junio") ; 
    break; 
    case 7:  
    console.log("Julio") ; 
    break; 
    case 8:  
    console.log("Agosto");
    break; 
    case 9: 
        console.log("Septiembre");
        break; 
        case 10:  
        console.log("Octubre");
        break; 
        case 11: 
        console.log("Noviembre"); 
        break;
        case 12: 
        console.log("Diciembre"); 
        break; 
            default : 
            console.log("" + numMes + " no es un mes valido"); 
} 

/* EJERCICIO 4*/ 
const temperaturaenCelsius= 17;
const temperaturaenFahrenheit=(temperaturaenCelsius* 9/5 ) + 32; 
console.log(`La temperatura en  Fahrenheit es  ${temperaturaenFahrenheit}`);

/* EJERCICIO 5 */
const num= 24; 
    if(num % 2 === 0){ 
        console.log(`${num} es par.`);
        }else{
            console.log(`${num} no es par`);
    }
/* EJERCICIO* 6*/ 

var M= 32;
var N= 8; 
    let sum=0; 
    for( let i= N;  i<=M;i++) { 
        if(i% 2 === 0){ 
            sum+= i;
        }
    }
    console.log(`La suma de los números pares entre ${N} y ${M} es ${sum}`);  

/* EJERCICIO 7*/
    const num1= 10;
    const num2= 15;

    let producto=0; 
     for(let i= 0; i < num2; i++) {
            producto += num1;  
     } 
     console.log(`El producto es ${num1} es ${num2} es ${producto}`);


