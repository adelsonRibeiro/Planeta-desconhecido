// Obtém o elemento HTML com o ID "historia"
let progressão = document.getElementById("historia");

// Função para gerenciar as mudanças de dia no jogo
function mudancaDeDia() {

    // Se o dia for igual a 3, atualiza o status do rádio e habilita o botão "Descansar"
    if(dia === 3){
        radio = document.getElementById("radio");
        radio.innerHTML = `Radio funcional ⚠️Sinal limitado`; // Mostra mensagem de rádio funcional com sinal limitado
        descansar = document.getElementById("btn3");
        radio1 = document.getElementById("radio1");
        radio2 = document.getElementById("radio2");
        radio1.innerHTML = `Condensador de Fluxo<strong><span style="color: green;"> ok</span>`; // Atualiza o status do Condensador de Fluxo
        radio2.innerHTML = `Oscilador de Ondas<strong><span style="color: green;"> ok</span>`; // Atualiza o status do Oscilador de Ondas
        descansar.innerHTML = `Descansar`;
        descansar.style.display = "block"; // Exibe o botão "Descansar"
    
    // Se o dia for igual a 5, atualiza a mochila e o botão de ação
    } else if (dia === 5){
        descansar = document.getElementById("btn3");
        mochila1 = document.getElementById("mochila1");
        mochila2 = document.getElementById("mochila2");
        mochila3 = document.getElementById("mochila3");
        mochila1.innerHTML = `Condensador de Fluxo`; // Adiciona o Condensador de Fluxo à mochila
        mochila2.innerHTML = `Oscilador de Ondas`; // Adiciona o Oscilador de Ondas à mochila
        mochila3.innerHTML = `Rádio`; // Adiciona o Rádio à mochila
        descansar.innerHTML = `FUGIR`; // Altera o botão "Descansar" para "FUGIR"
        descansar.style.display = "block"; // Exibe o botão "FUGIR"
        btn2.style.display = "none"; // Esconde o segundo botão de ação
    
    // Se o dia for igual a 6, finaliza a construção do rádio
    } else if (dia === 6){
        radio = document.getElementById("radio");
        radio.innerHTML = `Radio funcional`; // Atualiza o status do rádio para funcional
        descansar = document.getElementById("btn3");
        descansar.innerHTML = `retornar`; // Altera o botão "Descansar" para "retornar"
        radio3 = document.getElementById("radio3");
        radio3.innerHTML = `Transformador de Partículas<strong><span style="color: green;"> ok</span>`; // Atualiza o status do Transformador de Partículas
        descansar.style.display = "block"; // Exibe o botão "retornar"
        mochila4 = document.getElementById("mochila4");
        mochila4.innerHTML = `Transformador de Partículas`; // Adiciona o Transformador de Partículas à mochila
    
    // Caso contrário, exibe apenas o botão "Descansar"
    } else {
        descansar = document.getElementById("btn3");
        descansar.innerHTML = `Descansar`; // Mantém o botão "Descansar"
        descansar.style.display = "block"; // Exibe o botão
    };
}

// Função para gerenciar a primeira ação do jogador
function acao1() {
    let escolhas = listaEventos[dia]; // Obtém as escolhas do dia atual
    let escolhaAtual = escolhas["eventos"];
    opcoes = Object.keys(escolhaAtual);
    nomeBtn1 = btn1.innerHTML; // Obtém o nome do botão 1
    resutadoAcao = escolhaAtual[nomeBtn1]; // Define o resultado da ação
    progressão.innerHTML = resutadoAcao; // Atualiza a área de progressão com o resultado da ação
    btn1.hidden = true; // Esconde o botão 1 após a ação
    acoesDisponiveis -= 1; // Reduz o número de ações disponíveis

    // Se for o dia 6, chama a função mudancaDeDia
    if (dia === 6){
        mudancaDeDia()
    } else if (acoesDisponiveis === 0) {
        mudancaDeDia()
    };
}

// Função para gerenciar a segunda ação do jogador
function acao2() {
    let escolhas = listaEventos[dia]; // Obtém as escolhas do dia atual
    let escolhaAtual = escolhas["eventos"];
    opcoes = Object.keys(escolhaAtual);
    nomeBtn2 = btn2.innerHTML; // Obtém o nome do botão 2
    resutadoAcao = escolhaAtual[nomeBtn2]; // Define o resultado da ação
    progressão.innerHTML = resutadoAcao; // Atualiza a área de progressão com o resultado da ação
    btn2.hidden = true; // Esconde o botão 2 após a ação
    acoesDisponiveis -= 1; // Reduz o número de ações disponíveis

    // Se for o dia 6, chama a função mudancaDeDia
    if (dia === 6){
        mudancaDeDia()
    } else if (acoesDisponiveis === 0) {
        mudancaDeDia()
    };
}

// Condições para o dia 0 (início do jogo)
if (dia === 0) {
    let diaAtual = document.getElementById("dia");
    diaAtual.innerHTML = `Dia ${dia}`; // Atualiza o contador de dias
    let historiaDoDia = `dia${dia}`;
    progressão.innerHTML = historia[historiaDoDia]; // Exibe a história do dia atual
    
    index = (dia === 0) ? 0 : dia - 1; // Define o índice baseado no dia atual
    let escolhas = listaEventos[index];
    let escolhaAtual = escolhas["eventos"];
    opcoes = Object.keys(escolhaAtual);
    let btn1 = document.getElementById("btn1");
    btn1.innerHTML = `${opcoes[0]}`; // Define a primeira opção de ação
    let btn2 = document.getElementById("btn2");
    btn2.innerHTML = `${opcoes[1]}`; // Define a segunda opção de ação
    acoesDisponiveis = 2; // Reseta o número de ações disponíveis para 2

    // Função para capturar e exibir o nome do personagem
    function meuNome() {
        progressão.innerHTML = ``;
        campoNome = document.getElementById("nome-entrada");
        nome = campoNome.value; // Captura o nome inserido

        // Valida se o nome contém letras ou números
        if (nome !== "" && (/\d/.test(nome) || /[a-zA-Z]/.test(nome))) {
            novoNome = document.getElementById("nome-personagem");
            novoNome.innerHTML = `${nome}`; // Exibe o nome do personagem
            habilitaCampoNome = document.getElementById("campo-nome");
            habilitaCampoNome.style.display = "none"; // Esconde o campo de nome
            descansar = document.getElementById("btn3");
            descansar.style.display = "block"; // Exibe o botão "Descansar"
            nomeOK(); // Função que indica que o nome foi validado
        } else {
            progressão.innerHTML = `Informe um nome para seguirmos com a jornada.`; // Solicita que o jogador insira um nome válido
        };
    };
}

// Função para iniciar um novo dia
function novoDia() {
    descansar = document.getElementById("btn3");
    descansar.style.display = "none"; // Esconde o botão "Descansar"
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let escolhas = listaEventos[dia]; // Obtém as escolhas para o dia atual
    let escolhaAtual = escolhas["eventos"];
    opcoes = Object.keys(escolhaAtual);
    btn1.innerHTML = `${opcoes[0]}`; // Atualiza o botão 1 com a primeira opção
    btn2.innerHTML = `${opcoes[1]}`; // Atualiza o botão 2 com a segunda opção
    btn1.hidden = false;
    btn2.hidden = false;
    let diaAtual = document.getElementById("dia");
    diaAtual.innerHTML = `Dia ${dia}`; // Atualiza o contador de dias
    acoesDisponiveis = 2; // Reseta o número de ações disponíveis para 2

    let historiaDoDia = `dia${dia}`;
    progressão.innerHTML = `R.O.B.O.T.: ${historia[historiaDoDia]}`; // Exibe a história do dia atual
}
