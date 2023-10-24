//Criando/declarando a função tocaSom com parâmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    }

//Chamando/invocando a função tocaSomPom pelo clique do botão pom.
    document.querySelectorAll('.tecla_pom').onclick = tocaSomPom;

//Criando referência constante listaDeTeclas buscando todos os itens pela classe .tecla.
    const listaDeTeclas = document.querySelectorAll('.tecla');

//Invocando a função tocaSomPom a partir do item "0", 1º botão.
    listaDeTeclas[0].onclick = tocaSomPom;

//Criando referência variável "contador" iniciando = 0
    let contador = 0;

//Estrutura de repetição "while" significa "enquanto algo acontecer"
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+ efeito; 
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}