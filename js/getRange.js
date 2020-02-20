/**
 * @name getRange
 * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números
 * iniciales o no
 *
 * @param {number} a
 * @param {number} b
 * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
 * @returns {number[]} - Array de números entre a y b, incluyendo a y b
 *
 * @example
 *   getRange(5, 10) // returns [5, 6, 7, 8, 9 ,10]
 *   getRange(3, -2) // returns [3, 2, 1, 0, -1, -2]
 *   getRange(-5, -10, false) // returns [-6, -7, -8, -9]
 */

const getRange = (a, b, inclusive = true) => {
    let number = [];
    if (inclusive) {
        number.push(a);
        for (let i = a; i < b; i++) {
            number.push(i + 1);
        }
    }

    if (!inclusive) {
        for (let i = a; i < b - 1; i++) {
            number.push(i + 1);
        }
    }
    return number;
}