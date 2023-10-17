//Criando/declarando a função tocaSomPom.
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    }

//Chamando/invocando a função tocaSomPom pelo clique do botão pom.
    document.querySelectorAll('.tecla').onclick = tocaSomPom

//Criando referência constante listaDeTeclas buscando todos os itens pela classe .tecla.
    const listaDeTeclas = document.querySelectorAll('.tecla');

//Invocando a função tocaSomPom a partir do item "0", 1º botão.
    listaDeTeclas[0].onclick = tocaSomPom;