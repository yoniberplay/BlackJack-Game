
/**
 * TOMA UNA CARTA DEL DECK DE CARTAS
 * @param {Array<String>} Deck Deck de cartas 
 * @returns {String} retorna la carta que tomo del deck
 */
export const PedirCarta = (Deck) => {
  
    if(Deck.length === 0){
        throw "No hay cartas.";
    }
    
    let carta = Deck.pop();
    return carta;
   
  }