//Criando/declarando a função tocaSom com parâmetro idElementoAudio
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
        if (elemento && elemento.localName === 'audio'){
            elemento.play();
        }else{
            console.log("elemento não encontrado")
        }
    }
    

//Criando referência constante listaDeTeclas buscando todos os itens pela classe .tecla.
    const listaDeTeclas = document.querySelectorAll('.tecla');

//Estrutura de repetição "while" significa "enquanto algo acontecer"; mudou while para "for"
for(let contador = 0;contador < listaDeTeclas.length; contador ++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; // acessa o 2º item da classe de teclas
    const idAudio = `#som_${efeito}`; //template string
    tecla.onclick = function(){ //criar função anônima para chamar tocaSom
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(){
        if(evento.code === 'Space' || event.code === 'Enter')
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}