/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 *
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

const getRockPaperScissor = () => {
    let jugadas = ["rock", "paper", "scissor"];
    return jugadas[Math.round(Math.random() * (jugadas.length - 1))]
}