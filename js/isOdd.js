/**
 * @name isOdd
 * @description Devuelve si un número es impar
 *
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

// const isOdd = x => {
//     let result = false;
//     if (x % 2 != 0) {
//         result = true;
//     }
//     return result;
// }

const isOdd = x => (x % 2 != 0) ? true : false; 