
/**
 * 
 * Crea la imagen con la carta ingresada
 * @param {HTMLImageElement} imgcarta 
 * @param {String} cart 
 * @returns regresa un HTMLImageElement.
 */
export const createletter = (imgcarta,cart) => {

    imgcarta.src = `./assets/cartas/${ cart }.png`;
    imgcarta.classList.add('carta');

    return imgcarta;

}