let numero1 = parseInt(prompt("Ingrese el primer Numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo Numero: "));
let operacion = parseInt(prompt("Ingrese la accion (1: Sumar / 2 :Restar / 3:Dividir / 4:Multiplicar):"));
switch (operacion) {
    case 1:
        let suma = numero1 + numero2;
        alert("El resultado es: " + suma);
        break;
    case 2:
        let resta = numero1 - numero2;
        alert("El resultado es: " + resta);
        break;

    case 3:
        let dividir = numero1 / numero2;
        alert("El resultado es: " + dividir);
        break;

    case 4:
        let multiplicar = numero1 * numero2;
        alert("El resultado es: " + multiplicar);
        break;

    default:
        break;
}