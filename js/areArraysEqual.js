/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a
 * @param {[]} b
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */


const areArraysEqual = (a, b) => {
    result = true; // defino el resultado TRUE de antemano porque una vez TRUE puede ser false, pero una vez false ya no puede ser true
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) { // si en alguna de las iteraciones, no son iguales, ya es falso
            result = false;
        }
    }
    return result;
}


