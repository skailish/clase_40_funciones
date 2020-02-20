/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 *
 * @param {number} x - El número a evaluar si encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

// const inRange = (x, min, max) => {
//     let result = false;
//     if (x > min && x < max) {
//         result = true;
//     }
//     return result;
// }


const inRange = (x, min, max) => (x > min && x < max) ? true : false; 