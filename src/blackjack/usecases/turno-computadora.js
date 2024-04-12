
import { crearCartaHTML, pedirCarta, valorCarta } from './';

// turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son requeridos');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es requerido');
    if (!divCartasComputadora) throw new Error('Argumento divCartasComputadora es requerido');
    if (!deck || deck.length === 0) throw new Error('El deck es requerido');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}