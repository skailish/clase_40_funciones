/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 *
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */

const removeWords = (str, words) => {
    let string = "";
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) { // recorro el string
        for (let j = 0; j < words.length; j++) { // recorro las palabras a remover
            if (str[i] === words[j]) {
                str.splice(i, 1);
            }
            if (str[i] != undefined) {

                string += str[i] + " ";
            }
        }
    }
    string = string.slice(0, -1);
    return string;
}