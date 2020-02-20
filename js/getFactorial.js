/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

const getFactorial = number => {
    let factorial = 1;
    for (let i = number; i > 0; i--) {
        factorial *= i;

    }
    return factorial;
}