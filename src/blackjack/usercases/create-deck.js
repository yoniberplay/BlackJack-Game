import _ from 'underscore';

/**
 * Creando el deck de las cartas, todos los parametros son obligatorios
 * @param {array<string>} tipos Ejemplo ['C','D','H','S'];
 * @param {array<string>} especiales Ejemplo ['A','J','Q','K']
 * @param {array<string>} Deck 
 * @returns {array<string>} Retorna el deck de las cartas
 */
export const CreateDeck = (tipos,especiales,Deck) => {

  if (!tipos || tipos.length === 0) {
    throw new Error("Tipos es obligatorio");
  }
    for (let i = 2; i <= 10;  i++) {
         for (const J of tipos) {
          Deck.push(i+J);
      }  
    }
    
    for (const tipo of tipos) {
    
      for (const esp of especiales) {
          Deck.push(esp+tipo);
      }
    
    }
    
    //Reordenar aleatoriamente o barajar
    Deck = _.shuffle(Deck);
    return Deck;    
    }