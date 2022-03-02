/* let numero1 = parseInt(prompt("Ingrese el primer Numero: "));
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
        alert("El resultado es: " + multiplicar );
        break;

    default:
        break;
}
 */

let = num = parseInt(prompt('Ingrese un numero'));
let divisores = 0

if (num === 1) alert('El numero no es valido.')
else {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            alert(`${num} / ${i} = ${num / i} No es primo`)
            divisores++
            break
        }
    }
}

if (divisores == 0 ) alert(`${num} Es primo`);