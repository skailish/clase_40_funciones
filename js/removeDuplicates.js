/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 *
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

const removeDuplicates = arr => {
    let control = 0;
    for (let i = arr.length; i >= 0; i--) { // recorro el array de atrás hacia adelante
        control = arr.indexOf(arr[i]);

        if (control != -1 && control != i) {
            arr.splice(i, 1); // borra el elemento duplicado de array
        }
    }
    return arr;
}
