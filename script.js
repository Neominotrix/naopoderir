// Lista de perguntas e respostas
const perguntasERespostas = [
    { pergunta: "Qual é o nome do ditador iraniano surdo?", resposta: "R: Sadan -rus-hein?" },
    { pergunta: "Qual é o jogo favorito da galera do Stranger Things?", resposta: "R: Winning Eleven" },
    { pergunta: "Por que um homem levou uma câmera para um restaurante à kilo?", resposta: "R: Pra fazer selfie-service" },
    { pergunta: "Se o Tiririca virasse terrorista, qual seria o grupo dele?", resposta: "R: É o abestado islâmico" },
    { pergunta: "Qual é a molécula que tem raiva de todo mundo?", resposta: "R: Bicarbonato de ódio" },
    { pergunta: "Qual é o pote que toca música?", resposta: "R: O Spotify" },
    { pergunta: "Qual é o tipo de conexão que não funciona no elevador?", resposta: "R: A internet discada" },
    { pergunta: "Por que o vocalista do Terra Samba morreu afogado?", resposta: "R: Porque 'Nada mal, curtir um Terra Samba não é nada maaaaaaal'" },
    { pergunta: "Qual cantor sertanejo muda de nome depois de um certo horário?", resposta: "R: César meia-noite e Fabiano" },
    { pergunta: "Qual cantor não perde tempo na meteção?", resposta: "R: Carlinhos Vrau" },
    { pergunta: "O que acontece quando Tony Ramos não desiste da academia?", resposta: "R: Tonifica" },
    { pergunta: "Como se chamava a Adele antes de virar adulta?", resposta: "R: Adelescente" },
    { pergunta: "Por que a celulose ganhou o Oscar?", resposta: "R: Porque ela fez o melhor papel" },
    { pergunta: "Qual vocalista sabe tudo de planilhas?", resposta: "R: O Axl Rose" },
    { pergunta: "Qual atriz não come carne?", resposta: "R: A Vegan Fox" },
    { pergunta: "Por que o Roberto Carlos é considerado Rei?", resposta: "R: Porque no show dele só vai coroa" },
    { pergunta: "Por que o anão foi surfar na cozinha?", resposta: "R: Porque lá tem micro-ondas" },
    { pergunta: "Qual a doença mais comum entre os borracheiros?", resposta: "R: A pneumonia" },
    { pergunta: "Qual é o contrário de paixão?", resposta: "R: Mãe-teto" },
    { pergunta: "Por que a água foi presa?", resposta: "R: Porque ela matou a sede" },
    { pergunta: "Por que o policial não lava louça com sabão?", resposta: "R: Porque ele prefere deter gente" },
    { pergunta: "Qual o bolo favorito do Chorão?", resposta: "R: O Charlie Brown" },
    { pergunta: "Qual cantora escreveu o Sítio do Pica-Pau Amarelo?", resposta: "R: Demi Lobato" },
    { pergunta: "Qual cantora que é multiuso?", resposta: "R: Canivete Sangalo" },
    { pergunta: "Qual é a banda de pagode mais famosa dos animes?", resposta: "R: Sorriso Naruto" },
    { pergunta: "Qual é a série onde tem zumbis bêbados?", resposta: "R: O Álcool in Dead" },
    { pergunta: "Qual aplicativo os presidiários usam para fugir da prisão?", resposta: "R: Skype" },
    { pergunta: "Qual personagem da Marvel é rastafari?", resposta: "R: Dreadpool" },
];

let perguntaAtualIndex = -1;

function mostrarPergunta() {
    perguntaAtualIndex = (perguntaAtualIndex + 1) % perguntasERespostas.length;
    const perguntaElement = document.getElementById("pergunta");
    const respostaElement = document.getElementById("resposta");
    
    perguntaElement.textContent = perguntasERespostas[perguntaAtualIndex].pergunta;

    // Se houver uma resposta, exiba-a
    if (perguntasERespostas[perguntaAtualIndex].resposta) {
        respostaElement.textContent = perguntasERespostas[perguntaAtualIndex].resposta;
    } else {
        respostaElement.textContent = "";  // Limpa a resposta se não houver uma
    }
}
