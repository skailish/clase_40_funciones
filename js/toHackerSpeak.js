/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text
 * @returns {String} - El texto convertido a "Hacker Speak"
 *
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

const toHackerSpeak = text => {
    text = text.replace(/[a]/gi, "4");
    text = text.replace(/[e]/gi, "3");
    text = text.replace(/[i]/gi, "1");
    text = text.replace(/[o]/gi, "0");
    text = text.replace(/[s]/gi, "5");
    return String(text);
}