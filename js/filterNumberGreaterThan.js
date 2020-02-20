/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierta número x dejando sólo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */

const filterNumbersGreaterThan = (numbers, filter) => {
    numbersFiltered = [];
    for (let i = 0; i < numbers.length; i++) {
        (numbers[i] < filter) ? numbersFiltered.push(numbers[i]) : false;
    }
    return numbersFiltered;
}