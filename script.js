/**********************************************
**  1 -Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se debera imprimir en pantalla.
*/


var num1, num2;
num1 = 1;
num2 = 2;
console.log(num1 + num2);


/**********************************************
**  2 - Un estudiante realiza 4 examenes, calcular el promedio de estos.
*/


var examenes = [18, 19, 20, 14];
var sum = 0;

for (var i = 0; i < examenes.length; i++) {
  sum += examenes[i];
}

console.log(sum);

/**********************************************
**  3 - Calcular el area de un rectangulo
*/

// Area = base * altura;



var area, base, altura;
base = 10;
altura = 15;

area = base * altura;
console.log(area);



/**********************************************
**  4 - Calcular el area de un triangulo
*/

// Area = (base * altura) / 2



var area, base, altura;
base = 10;
altura = 15;

area = (base * altura) / 2;
console.log(area);



/**********************************************
**  5 - Calcular el area de una circunferencia
*/

// Area = PI * (radio * radio)



var area, pi, radio;
pi = 3.14;
radio = 15;

area = pi * (radio * radio);
console.log(area);



/**********************************************
**  6 - Determinar el sueldo semanal de un trabajador basandose en sus horas 
*/



var horasTrabajadas, sueldoXsemana, horasValor;

horasTrabajadas = 40;
horasValor = 15;

sueldoXsemana = horasTrabajadas * horasValor;
console.log(sueldoXsemana);



/**********************************************
**  7 - Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuántas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).
*/

// pulgadasTotales = pulgada * metro;



var metrosPrenda, pulgadasTotales, pulgada;

pulgada = 0.0254; 
metrosPrenda = 15;

pulgadasTotales = metrosPrenda * ( 1 / pulgada);

console.log(pulgadasTotales);



/**********************************************
**  8 - Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.
*/



var dolar, sol, total;

dolar = 0.30;
soles = 300;

total = soles * dolar;
console.log(total);



/**********************************************
**  9 - Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron
*/



var yearBirth, age;

actualYear = 2020;
yearBirth = 2002

age = actualYear - yearBirth;
console.log(age);



/**********************************************
**  10 - Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad. 
*/



var employes = {
  steven: 17,
  luis: 25,
  pepe: 30
}

for (var name in employes) {
  // console.log('name = ' + name + '\nage = ' + employes[name]);

  if (employes[name] < 18) {
    console.log(name + ' es menor de edad y tiene años = ' + employes[name]); 
  }
}



/**********************************************
**  11 - Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador 
*/



yearsWorking = [4, 5, 10, 14, 1, 2, 15];

for (var i = 0; i < yearsWorking.length; i++) {
  for (var k = 1; k <= 5; k++) {
    if (yearsWorking[i] === k) {
      console.log(yearsWorking[i] + ' bono: ' + k * 100);
    } 
  }

  if (yearsWorking[i] > 5) {
    console.log(yearsWorking[i] + ' bono: ' + 1000)
  }
}



/**********************************************
**  12 - Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y represente la solución, utilizando el ciclo apropiado.
*/



var salario = 1500;
var incremento = 0.1;
var incrementoTotal = 0;

for (var i = 1; i <= 6; i++) {
  incrementoTotal = (salario * incremento) * i;
  console.log('Incremento de salario N°' + i + ' = ' + 'S/' + incrementoTotal);
}

console.log('\t> Salario despues de 6 años = ' + 'S/' +(incrementoTotal + salario));



/**********************************************
**  13 - Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados.
*/



var calificaciones = [19, 18, 20, 11, 0, 8, 4, 3, 10, 14, 13];
var aprobados = 0;

for (var i = 0; i < calificaciones.length; i++) {
  if (calificaciones[i] >= 11) {
    aprobados++;
  }
}

console.log('Numero de alumnos aprobados = ' + aprobados);



/**********************************************
**  14 - Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia. 
*/



var lote = ['verde', 'verde', 'verde', 'verde', 'blanco',
            'rojo', 'blanco', 'blanco', 'blanco', 'rojo',
            'rojo', 'rojo', 'rojo', 'rojo', 'verde', 'verde'];

var verdes = 0, rojos = 0, blancos = 0;

for (var i = 0; i < lote.length; i++) {
  if (lote[i] === 'verde') {
    verdes++;
  } else if (lote[i] === 'blanco') {
    blancos++;
  } else {
    rojos++;
  }
}

console.log('Verdes = ' + verdes, '\nBlancos = ' + blancos, '\nRojos = ' + rojos);



/**********************************************
**  15 - Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones. 
*/



var edad = 15;

for (var i = 0; i < 10; i++) {
  if (edad > 18) {
    console.log('\t> SI Puede votar el año 202' + i);
  } else {
    console.log('> NO puede votar el año 202' + i)
  }
  edad++;
}

