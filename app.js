//variables
let numeroMaximioPosible = prompt('Eliga un numero maximo antes de empezar el juego')
let numeroSecreto = Math.floor(Math.random()*numeroMaximioPosible)+1; 
let numeroUsuario = 0;
let intentos =1 ;  
let maximosIntentos = 3;

console.log(numeroSecreto);



while (numeroUsuario != numeroSecreto){

  numeroUsuario = prompt(`Adivina el numero secreto, elige un numero entre 1 y ${numeroMaximioPosible}`);

  if (numeroSecreto == numeroUsuario){
    alert(`Felicidades, has adivinado el numero secreto en ${intentos} intentos`);
    break;
  }else{
    if (numeroUsuario > numeroSecreto){
    alert('El numero secreto es menor');
  } else if (numeroUsuario < numeroSecreto){
    alert('El numero secreto es mayor');
  }
    intentos++;

  if (intentos > maximosIntentos){
    alert(`Has superado el numero de intentos permitidos, el numero secreto era ${numeroSecreto}`);
    break;
  }
  }

  
  
}