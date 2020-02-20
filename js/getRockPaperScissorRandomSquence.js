/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

const getRockPaperScissorRandomSequence = length => {
    let jugadas = ["Piedra", "Papel", "Tijera"]; // jugadas posibles
    let random = ""; // jugada random en cada iteración
    let secuencia = []; // suma de todas las jugadas
    for (let i = 0; i < length; i++) { // hago tantas iteraciones con longitud definida por usuario
        random = Math.round(Math.random() * (jugadas.length - 1)); // la jugada es el index aleatorio de un elemento del array "jugadas"
        random = jugadas[random]; // en esta iteración, ESTA es la jugada
        secuencia += random + ", "; // le sumo la nueva jugada a la secuencia
    }
    return secuencia;
}