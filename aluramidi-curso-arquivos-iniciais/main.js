

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;


function tocarSom(idElementoAudio){
  const a = document.querySelector(idElementoAudio).play();
  return a;
  
}


for(let i = 0; i < listaDeTeclas.length; i++){

  const teclas = listaDeTeclas[i];

  const instrumento = teclas.classList[1];
  
   const idAudio = `#som_${instrumento}`;

   teclas.onclick = function (){
    
      tocarSom(idAudio);
   };
    
}
