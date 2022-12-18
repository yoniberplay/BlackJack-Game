

/**
 * Recibe el nombre de la carta y retorna su valor numerico
 * @param {String} carta Nombre de la carta
 * @returns valor numerico de la carta
 */
export const ValorCarta = (carta) =>  {
    const valor = carta.substring(0,carta.length - 1);
  
    return  (isNaN(valor)) ? 
    ((valor === 'A') ? 11 : 10 ) 
    : valor * 1;
  
  }
  