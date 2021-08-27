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