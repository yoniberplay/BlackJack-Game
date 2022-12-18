import {PedirCarta,ValorCarta,createletter} from './index';

/**
 * FUNCION PARA GENERAR LA PUNTUACION DE LA MAQUINA, SIEMPRE TRATARA DE GANAR AL JUGADOR
 * @param {number} minimo Minino de puntos que tienen que buscar la maquina para ganarle al jugador1
 * @param {Array<String>} Deck Deck de cartas 
 * @param {Element} PuntosComputadora Elemento HTML donde se mostrara la puntuacion de la maquina
 * @param {Element} computadora_cartas div en el cual se iran agregando las imagenes de las cartas
 * @returns Puntuacion acumulada de la maquina
 */
export const TurnoComputadora = (minimo,Deck,PuntosComputadora,computadora_cartas) => {

    let AcumuladorComputadora=0;
    do{
    const cart = PedirCarta(Deck); 
    AcumuladorComputadora += ValorCarta(cart);
    PuntosComputadora.textContent = AcumuladorComputadora;
  
    const imgcarta = document.createElement('img');
    computadora_cartas.append(createletter(imgcarta,cart))
  
    if(minimo > 21){
        break;
    }
  
    }while((AcumuladorComputadora < minimo) && (AcumuladorComputadora <= 21)  )
  
    return AcumuladorComputadora;
    }