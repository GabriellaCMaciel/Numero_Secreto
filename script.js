// Gera um número aleatório entre 1 e 100
let numeroAleatorioDecimal = Math.random();
let numeroAleatorioEntre1e100 = Math.floor(numeroAleatorioDecimal * 100) + 1;
let tentativas = 0; // Variável para contar as tentativas

// Função para receber a tentativa do jogador
function tentarAdivinhar() {
    // Pega o valor digitado no input
    let tentativa = document.getElementById("numeroJogador").value;

    // Verifica se o jogador digitou algo e é um número
    if (tentativa === "") {
        document.getElementById("feedback").innerHTML = "Por favor, insira um número!";
        return;
    }

    tentativa = parseInt(tentativa); // Transforma a tentativa para um número inteiro
    tentativas++; // Conta a tentativa

    // Verifica se a tentativa está correta
    if (tentativa === numeroAleatorioEntre1e100) {
        document.getElementById("feedback").innerHTML = "Parabéns! Você acertou o número!";
        document.getElementById("tentativas").innerHTML = `Número de tentativas: ${tentativas}`;
        mostrarBotaoJogarNovamente();
    } else if (tentativa < numeroAleatorioEntre1e100) {
        document.getElementById("feedback").innerHTML = "O número é maior. Tente novamente.";
    } else {
        document.getElementById("feedback").innerHTML = "O número é menor. Tente novamente.";
    }

    // Limpa o input após a tentativa
    document.getElementById("numeroJogador").value = "";
}

// Função para adicionar o evento de pressionamento da tecla "Enter" no input
function adicionarEventoEnter() {
    document.getElementById("numeroJogador").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita o comportamento padrão de envio de formulário
            tentarAdivinhar(); // Chama a função ao pressionar "Enter"
        }
    });
}

// Função para mostrar o botão de jogar novamente
function mostrarBotaoJogarNovamente() {
    document.getElementById("jogarNovamente").style.display = "inline-block"; // Torna o botão visível
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Gera um novo número aleatório
    numeroAleatorioDecimal = Math.random();
    numeroAleatorioEntre1e100 = Math.floor(numeroAleatorioDecimal * 100) + 1;
    tentativas = 0; // Reseta o contador de tentativas

    // Reseta o feedback e o contador de tentativas
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("tentativas").innerHTML = "";

    // Oculta o botão de jogar novamente
    document.getElementById("jogarNovamente").style.display = "none";

    // Limpa o campo de input
    document.getElementById("numeroJogador").value = "";
}

// Chama a função para adicionar o evento assim que a página for carregada
window.onload = function() {
    adicionarEventoEnter(); // Registra o evento de "Enter"
    // Evento de clique no botão "Tentar"
    document.getElementById("tentar").addEventListener("click", function() {
        tentarAdivinhar(); // Chama a função ao clicar no botão
    });
};