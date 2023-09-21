//ejercicio 01
function ejer1(){
    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un algoritmo que imprima el nombre de un producto, clave, precio
    original y su total con descuento. El descuento lo hace en base a la clave,
    Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento
    en del 20% (sólo existen dos claves).</p>
    <input type="button" value="Enviar" onclick="Descuento()">
    `;
}

function Descuento(){
    let nombreProducto, clave, precio, descuento, total;
    nombreProducto = prompt("Ingrese nombre del producto");
    precio = Number(prompt("Ingrese el precio del producto"));
    clave = prompt("Ingrese la clave");

    if(clave == "01"){
        descuento = precio * 0.10;
        total = precio - descuento;
        document.getElementById('resultado').innerHTML = 'El producto es: ' + nombreProducto + ".<br>";
        document.getElementById('resultado').innerHTML += ' La clave es: ' + clave + ".<br>";
        document.getElementById('resultado').innerHTML += ' Precio del producto: ' + precio + ".<br>";
        document.getElementById('resultado').innerHTML += ' Descuento: ' + descuento + ".<br>";
        document.getElementById('resultado').innerHTML += ' Total: ' + total + ".<br>";

    }else if(clave == "02"){
        descuento = precio * 0.20;
        total = precio - descuento;
        document.getElementById('resultado').innerHTML = 'El producto es: ' + nombreProducto + ".<br>";
        document.getElementById('resultado').innerHTML += ' La clave es: ' + clave + ".<br>";
        document.getElementById('resultado').innerHTML += ' Precio del producto: ' + precio + ".<br>";
        document.getElementById('resultado').innerHTML += ' Descuento: ' + descuento + ".<br>";
        document.getElementById('resultado').innerHTML += ' Total: ' + total + ".<br>";
    }else{
        alert("la clave ingresada es incorrecta")
    }
}

//ejercicio 02
function ejer2(){
    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un algoritmo que calcule el total a pagar por la compra de camisas,
    precio de las camisas 25000. Si se compran tres camisas o más se aplica
    un descuento del 20% sobre el total de la compra y si son menos de tres
    camisas un descuento del 10%</p>
    <input type="button" value="Enviar" onclick="descuentoCamisa()">
    `;
}

function descuentoCamisa(){
    let cantidadCamisa, descuentoC, TotalVenta, TotalVentaDescuento;
    const precioCamisa = 25000;
    cantidadCamisa = Number(prompt("Ingrese la cantidad de camisas que desea comprar"));

    if(cantidadCamisa >= 3){
        TotalVenta = precioCamisa * cantidadCamisa;
        descuentoC = TotalVenta * 0.20;
        TotalVentaDescuento = TotalVenta - descuentoC;
        document.getElementById('resultado').innerHTML = 'Su compra fue por: ' + cantidadCamisa + " camisas.<br>";
        document.getElementById('resultado').innerHTML += 'Total bruto: ' + TotalVenta + ".<br>";
        document.getElementById('resultado').innerHTML += ' Descuento: ' + descuentoC + ".<br>";
        document.getElementById('resultado').innerHTML += ' Total: ' + TotalVentaDescuento + ".<br>";

    }else if(cantidadCamisa < 3){
        TotalVenta = precioCamisa * cantidadCamisa;
        descuentoC = TotalVenta * 0.10;
        TotalVentaDescuento = TotalVenta - descuentoC;
        document.getElementById('resultado').innerHTML = 'Su compra fue por: ' + cantidadCamisa + " camisas.<br>";
        document.getElementById('resultado').innerHTML += 'Total bruto: ' + TotalVenta + ".<br>";
        document.getElementById('resultado').innerHTML += ' Descuento: ' + descuentoC + ".<br>";
        document.getElementById('resultado').innerHTML += ' Total: ' + TotalVentaDescuento + ".<br>";
    }else{

    }
    
}

//ejercicio 03
function ejer3(){
    document.getElementById('enunciado').innerHTML = `
    <p>En un supermercado se hace una promoción, mediante la cual el cliente
    obtiene un descuento dependiendo de un número que se escoge al azar los
    numeros deben de estar entre 1 y 10. Si el número escogido es menor que
    10 el descuento es del 15% sobre el total de la compra, si es menor o igual
    a 5 el descuento es del 20%. Obtener cuánto dinero se le descuenta.</p>
    <input type="button" value="Enviar" onclick="descuentoSuper()">
    `;
}

function descuentoSuper(){
    let numsuerte;
    const dsct1 = 0.15;
    const dsct2 = 0.20;
    numsuerte = Number(prompt("Ingrese un numero del 1 al 10"));

    if(numsuerte >= 1 && numsuerte <= 5){
        document.getElementById('resultado').innerHTML = "Felicidades obtuviste un descuento del 20% en tu compra"
    } else if(numsuerte >= 6 && numsuerte <= 10){
        document.getElementById('resultado').innerHTML = "Felicidades obtuviste un descuento del 15% en tu compra" 
    }else{
        document.getElementById('resultado').innerHTML = "Recuerde que el numero debe ser del1 al 10"
    }
    
}

//ejercicio 04
function ejer4(){
    document.getElementById('enunciado').innerHTML = `
    <p>Calcular el número de pulsaciones que debe tener una persona por cada 10
    segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo es
    femenino es:
    num. pulsaciones ← (220 - edad)/10
    y si el sexo es masculino:
    num. pulsaciones ← (210 - edad)/10</p>
    <input type="button" value="Enviar" onclick="pulsaciones()">
    `;
}

function pulsaciones(){
    let genero, edad;
    let pulsacionesMasculino;
    let pulsacionesFemenino;

    edad = Number(prompt("Ingrese su edad"));
    genero = prompt("ingrese su genero, M= masculino y F=femenino")

    if(genero == "m"){
        let pulsacionesMasculino = (210 - edad) / 10;
        document.getElementById('resultado').innerHTML = "La persona de genero masculina con " + edad + " años, debe tener unas pulsaciones de: " + pulsacionesMasculino;
    }else if(genero == "f"){
        let pulsacionesFemenino = (220 - edad) / 10;
        document.getElementById('resultado').innerHTML = "La persona de genero femenino con " + edad + " año,s debe tener unas pulsaciones de: " + pulsacionesFemenino;
    }else{
        document.getElementById('resultado').innerHTML = "por favor un ingrese una de las siguientes opciones en genero: M= masculino y F=femenino";
    }

}

//ejercicio 05
function ejer5(){
    document.getElementById('enunciado').innerHTML = `
    <p>Elabore un algoritmo que lea un número negativo e imprima el número y el
    positivo del mismo.</p>
    <input type="button" value="Enviar" onclick="positivo()">
    `;
}

function positivo(){
    var num, postivo;
    num = prompt("Ingrese numero negativo");

    if(num < 0){
        positivo = num * -1;
        document.getElementById('resultado').innerHTML = 'El número negativo es ' + num + " <br>";
        
        document.getElementById('resultado').innerHTML += ' El número positivo es ' + positivo;
    }else{
        alert("El numero no es negativo");
    }
}

//ejercicio 06
function ejer6(){
    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un algoritmo que permita pasa de kilogramos a gramos y toneladas.</p>
    <input type="button" value="Enviar" onclick="convert()">
    `;
}

function convert(){
    var numkg,convgramos,convtoneladas;
    numkg = Number(prompt("Ingrese la cantidad en kilogramos"));
    const gramo = 1; //gramos
    const kilogramo = 1000; //gramos
    const tonelada = 1000; //kilogramos
    convgramos = numkg * kilogramo;
    convtoneladas = numkg / tonelada;

    document.getElementById('resultado').innerHTML = 'los ' + numkg + " kilogramos equivalen a " + convgramos + " gramos y a " + convtoneladas + " toneladas.";
}

//ejercicio 07
function ejer7(){
    document.getElementById('enunciado').innerHTML = `
    <p>Un paquete de galletas cuesta $3.500 y contiene 15 galletas, cuánto
    cuestan X cantidad de galletas de ellas? Elabore un algoritmo para obtener
    la respuesta.</p>
    <input type="button" value="Enviar" onclick="galletas()">
    `;
}

function galletas(){
    var numx;
    numx = Number(prompt("Ingrese la cantidad de galletas"));
    const paqgalletas = 15;
    const preciopaquete = 3500;
    const promgalleta = preciopaquete / paqgalletas;
    let preciox =promgalleta * numx;

    document.getElementById('resultado').innerHTML = 'las ' + numx + " galletas cuestan: $" + preciox;
}

//ejercicio 08
function ejer8(){
    document.getElementById('enunciado').innerHTML = `
    <p>Si 15 cuadernos cuestan $75000, cuánto cuestan X cantidad de
    cuadernos?. Elabore un algoritmo para hallar la respuesta correcta.</p>
    <input type="button" value="Enviar" onclick="cuadernos()">
    `;
}

function cuadernos(){
    var numy;
    numy = Number(prompt("Ingrese la cantidad de cuadernos"));
    const paqcuadernos = 15;
    const preciopaq = 75000;
    const promcuaderno = preciopaq / paqcuadernos;
    let precioy = promcuaderno * numy;

    function sueldototal(numy){
        document.getElementById('resultado').innerHTML = 'los ' + numy + " cuadernos cuestan: $" + precioy;
    }

    sueldototal(numy) 

}

//ejercicio 09
function ejer9(){
    document.getElementById('enunciado').innerHTML = `
    <p>Realizar un programa que cuente de 1 a 200 e imprima en pantalla los
    números divisibles por 6, y cuando llegue a 200 cuente de forma regresiva
    hasta 20 e imprima los divisibles por 8.</p>
    <input type="button" value="Enviar" onclick="lista1()">
    `;
}

function lista1(){
    
    // divisibles de 6
    var arrayVacio = []
    for (let i = 1; i <= 200; i++) {
    if (i % 6 == 0) {
        arrayVacio.push(i)
        document.getElementById('resultado').innerHTML = "los numeros: " + arrayVacio + " son divisible de 6. <br>";
        }
    }
  
  //divisibles de 8
    var arraylista = []
    for (let a = 200; a >= 20; a--) {
    if (a % 8 == 0) {
        arraylista.push(a)
        document.getElementById('resultado2').innerHTML = "los numeros: " + arraylista + " son divisible de 8. <br>";
        }
    }
  
}

//ejercicio 10
function ejer10(){
    document.getElementById('enunciado').innerHTML = `
    <p>Realizar un programa que capture el nombre de dos personas y las fechas
    de nacimiento con cada campo por separado día, mes y año y calcule la
    edad de dos personas diferentes y diga cuál de ellos es mayor.</p>
    <input type="button" value="Enviar" onclick="cedad()">
    `;
}

function cedad(){
    var nombre1, nombre2, dia1, dia2, mes1, mes2, año1, año2, caledad1, caledad2, caledad1, caledad2;
    nombre1 = prompt("Ingrese el nombre de la primer persona");
    dia1 = Number(prompt("Ingrese el dia de nacimiento"));
    mes1 = prompt("Ingrese el mes de nacimiento");
    año1 = Number(prompt("Ingrese el año de nacimiento"));

    nombre2 = prompt("Ingrese el nombre de la segunda persona");
    dia2 = Number(prompt("Ingrese el dia de nacimiento"));
    mes2 = prompt("Ingrese el mes de nacimiento");
    año2 = Number(prompt("Ingrese el año de nacimiento"));

    const añoactual = 2023;
    caledad1 = añoactual - año1;
    caledad2 = añoactual - año2;

    if(caledad1 > caledad2){
        document.getElementById('resultado').innerHTML = nombre1 + " con fecha de nacimiento: " + dia1 + "/" + mes1 + "/" + año1 + " tiene " + caledad1 + " años de edad. <br>";
        document.getElementById('resultado').innerHTML += nombre2 + " con fecha de nacimiento: " + dia2 + "/" + mes2 + "/" + año2 + " tiene " + caledad2 + " años de edad. <br>";
        document.getElementById('resultado').innerHTML += nombre1 + " es mayor que " + nombre2;
    } else if(caledad2 > caledad1) {
        document.getElementById('resultado').innerHTML = nombre1 + " con fecha de nacimiento: " + dia1 + "/" + mes1 + "/" + año1 + " tiene " + caledad1 + " años de edad. <br>";
        document.getElementById('resultado').innerHTML += nombre2 + " con fecha de nacimiento: " + dia2 + "/" + mes2 + "/" + año2 + " tiene " + caledad2 + " años de edad. <br>";
        document.getElementById('resultado').innerHTML += nombre2 + " es mayor que " + nombre1;
    }else{
        document.getElementById('resultado').innerHTML = nombre1 + " con fecha de nacimiento: " + dia1 + "/" + mes1 + "/" + año1 + " tiene " + caledad1 + " años de edad. <br>";
         document.getElementById('resultado').innerHTML += nombre2 + " con fecha de nacimiento: " + dia2 + "/" + mes2 + "/" + año2 + " tiene " + caledad2 + " años de edad. <br>";
        document.getElementById('resultado').innerHTML += nombre1 + " y " + nombre2 + " tienen la misma edad.";
    }

}

//ejercicio 11
function ejer11(){
    document.getElementById('enunciado').innerHTML = `
    <p>Un programa que me capture el salario de un empleado y me realice el
    descuento de pensión y salud, pero si el salario es superior a 1200000 no le
    debe descontar.</p>
    <input type="button" value="Enviar" onclick="salypens()">
    `;
}

function salypens(){
    var sueldo, calsalud, calpension, totalS1,totalS2;

    sueldo = Number(prompt("Ingrese el sueldo"));

    const salud = 0.04;
    const pension = 0.04;
    calsalud = sueldo * salud;
    calpension = sueldo * pension;
    totalS1 = sueldo - calsalud - calpension;
    totalS2 = sueldo; 

    if(sueldo <1200000){
        document.getElementById('resultado').innerHTML += "El empleado tiene un sueldo de: " + sueldo + ", descuento de salud por: " + calsalud + " y pension por: " + calpension + ", y un total por: " + totalS1;
    } else{
        document.getElementById('resultado').innerHTML += "El empleado tiene un sueldo de " + sueldo;
    }

}

//ejercicio 12
function ejer12(){
    document.getElementById('enunciado').innerHTML = `
    <p>Un programa que, capture el salario de un empleado, y lo divida por 30
    dias del mes, también debe capturar los días trabajados y me debe
    mostrar el total ganado.</p>
    <input type="button" value="Enviar" onclick="salypens()">
    `;
}

function salypens(){
    var salario, diastrabajados;

    salario = Number(prompt("Ingrese el salario"));
    diastrabajados = Number(prompt("Ingrese los dias trabajados"));

    const salariodia = salario / 30;
    const salariototal = salariodia * diastrabajados;

    function sueldototal(salariototal){
        document.getElementById('resultado').innerHTML = "el trabajador laboro " + diastrabajados + " ganando un salario de: " + salariototal;
    }
    sueldototal(salariototal)

}

//ejercicio 13
function ejer13(){
    document.getElementById('enunciado').innerHTML = `
    <p>Mientras a <= 1500; contar hasta 1500 e imprimir los números divisibles por
    4 y 5 y decir si son pares o impares.</p>
    <input type="button" value="Enviar" onclick="eje13()">
    `;
}

function eje13(){
    var resultado = "";
    for (var i = 1; i <= 1500; i++) {
        if (i % 4 === 0 && i % 5 === 0) {
            resultado += "Número: " + i + " es divisible por 4 y 5. ";
            if (i % 2 === 0) {
                resultado += "Es par.<br>";
            } else {
                resultado += "Es impar.<br>";
            }
        }
    }
    document.getElementById('resultado').innerHTML = resultado;

}

//ejercicio 14
function ejer14(){
    document.getElementById('enunciado').innerHTML = `
    <p>Elaborar un algoritmo, que tenga 10 números enteros. El programa debe
    sumar todos los números que sean múltiplos de 3.</p>
    <input type="button" value="Enviar" onclick="lista4()">
    `;
}

function lista4(){
    var nume, sumas;
    sumas = 0;
    var arraynume = []

    con=1;
    while(con<=10){
        nume = Number(prompt("ingrese un numero"));
        arraynume.push(nume)
        if (nume % 3 == 0) {
        sumas = sumas + nume;
        }
        con++;
    }
    
     document.getElementById('resultado').innerHTML += '<br>Los numeros ingresados fueron: ' + arraynume + ". <br>";
     document.getElementById('resultado').innerHTML += '<br>La suma de los numeros divisibles es: ' + sumas + ". <br>";
}

//ejercicio 15
function ejer15(){
    document.getElementById('enunciado').innerHTML = `
    <p>Mostrar las 30 primeras potencias de 3 y la suma de ellos.</p>
    <input type="button" value="Enviar" onclick="pot30()">
    `;
}

function pot30(){
    var base = 3;
    var potencias = [];
    var suma = 0;
    
    for (var exponente = 0; exponente < 30; exponente++) {
        var resultado = Math.pow(base, exponente);
        potencias.push(resultado);
        suma = suma + resultado;
    }

    document.getElementById('resultado').innerHTML += '<br>Las primeras 30 potencias de 3 son: ' + potencias + ". <br>";
    document.getElementById('resultado').innerHTML += '<br>La suma de las potencias es: ' + suma + ". <br>";
    
    }  

//ejercicio 16**
function ejer16(){
    document.getElementById('enunciado').innerHTML = `
    <p>Un programa con 5 alumnos cada uno con 5 notas, calcular el promedio de
    sus notas por alumnos y solo muestra los que ganaron.</p>
    <input type="button" value="Enviar" onclick="prom5()">
    `;
}

function prom5(){
    
    let sumas1 = 0;
    let sumas2 = 0;
    let sumas3 = 0;
    let sumas4 = 0;
    let sumas5 = 0;
    

    for(let a = 1; a <= 5; a++){
        let notas1 = parseInt(prompt("ingrese una nota del primer alumno"));
        sumas1 = sumas1 + notas1
        let prom1 = sumas1 / 5;
        document.getElementById('resultado').innerHTML = '<br>El promedio academico del primer alumno es ' + prom1 + ". <br>";
    }

    for(let e = 1; e <= 5; e++){
        let notas2 = parseInt(prompt("ingrese una nota del segundo alumno"));
        sumas2 = sumas2 + notas2
        let prom2 = sumas2 / 5;
        document.getElementById('resultado2').innerHTML = '<br>El promedio academico del segundo alumno es ' + prom2 + ". <br>";
    }

    for(let i = 1; i <= 5; i++){
        let notas3 = parseInt(prompt("ingrese una nota del tercer alumno"));
        sumas3 = sumas3 + notas3
        let prom3 = sumas3 / 5;
        document.getElementById('resultado3').innerHTML = '<br>El promedio academico del tercer alumno es ' + prom3 + ". <br>";
    }

    for(let o = 1; o <= 5; o++){
        let notas4 = parseInt(prompt("ingrese una nota del cuarto alumno"));
        sumas4 = sumas4 + notas4
        let prom4 = sumas4 / 5;
        document.getElementById('resultado4').innerHTML = '<br>El promedio academico del cuarto alumno es ' + prom4 + ". <br>";
    }

    for(let u = 1; u <= 5; u++){
        let notas5 = parseInt(prompt("ingrese una nota del quinto alumno"));
        sumas5 = sumas5 + notas5
        let prom5 = sumas5 / 5;
        document.getElementById('resultado5').innerHTML = '<br>El promedio academico del quinto alumno es ' + prom5 + ". <br>";
    }

    }  

//ejercicio 17
function ejer17(){
    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo, con el dividendo y el divisor y que luego me calcule el
    residuo y el cociente de dicha división.</p>
    <input type="button" value="Enviar" onclick="division()">
    `;
}

function division(){
    var dividendo, divisor;

    dividendo = Number(prompt("Ingrese el primer numero"));
    divisor = Number(prompt("Ingrese el segundo numero"));
    const cociente = Math.floor(dividendo / divisor);
    const residuo = dividendo % divisor;

    

    function division(){
        document.getElementById('resultado').innerHTML = "Los numeros ingresados fueron: <br>" + "Dividendo: " + dividendo + " y el divisor: " + divisor + "<br>";
        document.getElementById('resultado').innerHTML += "El residuo es: " + residuo + " y el cociente es: " + cociente;
    }
    division()

}

//ejercicio 18
function ejer18(){
    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo que intercambie los valores de dos variables
    numéricas.</p>
    <input type="button" value="Enviar" onclick="cambionum()">
    `;
}

function cambionum(){
    var num1, num2;

    num1 = Number(prompt("Ingrese el primer numero"));
    num2 = Number(prompt("Ingrese el segundo numero"));

    

    function intercambionum(){
        document.getElementById('resultado').innerHTML = "Los numeros ingresados fueron: " + num1 + " y " + num2 + ". <br>";
        document.getElementById('resultado').innerHTML += "Los numeros ingresados fueron: " + num2 + " y " + num1;
    }
    intercambionum()

}

//ejercicio 19
function ejer19(){
    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo que me permita ingresar un valor inicial y luego un
    valor final, para luego calcular el valor central de los números.</p>
    <input type="button" value="Enviar" onclick="ninf()">
    `;
}

function ninf(){
    var ninicial2, nfinal;
    ninicial2 = Number(prompt("ingrese el número inicial"));
    nfinal = Number(prompt("ingrese el número final"));

    document.getElementById('resultado').innerHTML = 'El número inicial fue ' + ninicial2 + " y el numero final fue " + nfinal;

    var arraynumcentral = []
    for(let c = ninicial2; c<=nfinal; c++){
        arraynumcentral.push(c)
    }

    var numerocentral = Math.floor((ninicial2+nfinal)/2);  
    
     document.getElementById('resultado').innerHTML += '<br>los numeros de la lista son:  ' + arraynumcentral + ". <br>";
     document.getElementById('resultado').innerHTML += '<br>El numero central es: ' + numerocentral;

}

//ejercicio 20
function ejer20(){
    document.getElementById('enunciado').innerHTML = `
    <p>Se desea calcular independientemente la suma de los números pares e
    impares comprendidos entre 1 y 50.</p>
    <input type="button" value="Enviar" onclick="pareseimpares()">
    `;
}

function pareseimpares() {
    var ninicial2 = 1; 
    var nfinal = 50;
    var suma1 = 0;
    var suma2 = 0;

    document.getElementById('resultado').innerHTML = 'El número inicial fue ' + ninicial2 + " y el número final fue " + nfinal;

    var arraynumlist = [];

    for (let d = 1; d <= 50; d++) {
        arraynumlist.push(d);

        if (d % 2 == 0) {
            suma1 = suma1 + d;
        } else {
            suma2 = suma2 + d;
        }
    }

    document.getElementById('resultado').innerHTML += '<br>La suma de los números pares es: ' + suma1 + ". <br>";
    document.getElementById('resultado').innerHTML += '<br>La suma de los números impares es: ' + suma2 + ". <br>";
}

//ejercicio 21
function ejer21(){
    document.getElementById('enunciado').innerHTML = `
    <p>Determinar el promedio de una lista 20 de números positivos.</p>
    <input type="button" value="Enviar" onclick="pos20()">
    `;
}

function pos20(){
    var ninicial, suma, promedio;
    suma = 0;
    ninicial = Number(prompt("ingrese el número inicial"));

    document.getElementById('resultado').innerHTML = 'El número inicial fue ' + ninicial;

    con=1;
    while(con<=20){
        suma = suma + ninicial;
        console.log(suma);
        con++;
        ninicial++;
    }
     promedio = suma / 20;
    
     document.getElementById('resultado').innerHTML += '<br>El número final fue ' + ninicial;
     document.getElementById('resultado').innerHTML += '<br>El promedio fue ' + promedio;

}

//ejercicio 22
function ejer22(){
    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo que calcule los 5 primeros números impares que
    preceden a un numero N</p>
    <input type="button" value="Enviar" onclick="impares5()">
    `;
}

function impares5(){
    
    var numN;
    numN = Number(prompt("ingrese un numero"));
    var impares = [];
    var numero = numN; 
    
    while (impares.length < 5) {
        if (numero % 2 !== 0) {
            impares.push(numero);
        }
        numero--;
    }
    
    impares.reverse(); 
    document.getElementById('resultado').innerHTML += '<br>Los 5 primeros numeros impares que proceden de ' + numN + " son: " + impares;
} 

//ejercicio 23
function ejer23(){
    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un programa que muestre si los cincos primeros numeros impares
    son múltiples de tres arrancando de 10.</p>
    <input type="button" value="Enviar" onclick="sonMultiplosDeTres()">
    `;
}

function sonMultiplosDeTres(){
    
    var numero = 10;
    var imparesEncontrados = 0;
    
    while (imparesEncontrados < 5) {
        if (numero % 2 !== 0 && numero % 3 === 0) {
            document.getElementById('resultado').innerHTML += numero + ' Es un numero impar y multiplo de 3. <br>';
            imparesEncontrados++;
        }
        numero++;
        }
    }
    




