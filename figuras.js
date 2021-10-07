// Código cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado()

function areaCuadrado(lado){
    return lado * lado;

}

console.groupEnd();

// Código triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base*altura)/2;
}
console.groupEnd();

// Código Circulo
console.group("Circulo");

// Diámetro
function diametroCirculo(radio) {
    return radio*2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio*radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con HTML
// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triángulo

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = Number(inputLado2.value);

    const inputBase = document.getElementById("InputBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBase");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

// Triángulo isosceles

function calcularAlturaIsosceles() {
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = Number(inputLado2.value);

    const inputBase = document.getElementById("InputBase");
    const valueBase = Number(inputBase.value);

    if(valueLado1 === valueLado2 && valueLado1 != valueBase){
        alert('isosceles');
        const altura = Math.sqrt(valueLado1**2 - valueBase**2/ 4);
        alert(altura);
    }
    else{
        alert('No es isosceles');
    }
    
}

// Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}