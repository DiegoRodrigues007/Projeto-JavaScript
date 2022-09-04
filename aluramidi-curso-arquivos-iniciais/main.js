

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;


function tocarSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio);

  if(elemento != null && elemento.localName === 'audio'){
    elemento.play();
  }
  else{
    // Elemento não encontrado 
    console.log('Elemento não encontrado')
  }




}

for(let i = 0; i < listaDeTeclas.length; i++){

  const teclas = listaDeTeclas[i];

  const instrumento = teclas.classList[1];
  
   const idAudio = `#som_${instrumento}`;

   teclas.onclick = function (){
    
      tocarSom(idAudio);
   };

   teclas.onkeydown = function(evento){

    console.log(evento.code === 'Space' || evento.code === "Enter");

    if(evento.code === 'Space' || evento.code === 'Enter'){
      teclas.classList.add('ativa');
    }
    
   }

   teclas.onkeyup = function(){
    teclas.classList.remove('ativa')
   }
    
}
