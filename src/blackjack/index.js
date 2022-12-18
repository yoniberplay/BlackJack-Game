import _ from 'underscore';
import {CreateDeck,PedirCarta,ValorCarta,TurnoComputadora,createletter} from './usercases/index';

//Patron Modulo
(() => {

  'user strict'
let Deck =[]
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K']
let AcumuladorJugador=0;

//Botones
const jugador_cartas = document.querySelector('#jugador-cartas');
const computadora_cartas = document.querySelector('#computadora-cartas');
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDeteter = document.querySelector('#btnDeteter');
const PuntosJugador1 =  document.querySelector('.PuntosJugador1');
const PuntosComputadora =  document.querySelector('.PuntosComputadora');

Deck = CreateDeck(tipos,especiales,Deck);

//TODO: EVENTOS
btnPedir.addEventListener("click",() => { 

  const cart = PedirCarta(Deck); 
  AcumuladorJugador += ValorCarta(cart);
  PuntosJugador1.textContent = AcumuladorJugador;

  const imgcarta = document.createElement('img');
  jugador_cartas.append(createletter(imgcarta,cart))
  

  if(AcumuladorJugador === 21){
      btnPedir.disabled = true;
      btnDeteter.disabled = true;
      alert("Felicidades, Ganaste!");
  }else if(AcumuladorJugador > 21){
      btnPedir.disabled = true;
      btnDeteter.disabled = true;
      alert("Haz perdido.");
  }
});


btnDeteter.addEventListener("click",() => { 
  btnPedir.disabled = true;
  btnDeteter.disabled = true;

  let AcumuladorComputadora = TurnoComputadora(AcumuladorJugador,Deck,PuntosComputadora,computadora_cartas);

  if(AcumuladorComputadora <= 21 && AcumuladorComputadora > AcumuladorJugador){
      alert("Haz perdido.");
  }else {
      alert("Felicidades.");
  }

});

btnNuevo.addEventListener("click",() => { 
  console.clear();
  location.reload();
});

})()








