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
    { pergunta: "Qual é o local em que os crustáceos mais usam drogas?", resposta: "R: A Cracalandia." },
    { pergunta: "Qual é o organismo que fuma bastante maconha?", resposta: "R: É a Becktéria" },
    { pergunta: "Qual tipo de invertebrado só aceita ir no médico pra fazer exame no tubo digestivo?", resposta: "R: O Gastro pode" },
    { pergunta: "Um aluno já está a dois anos no mesmo ano da escola. Qual o animal?", resposta: "R: Réptil" },
    { pergunta: "Qual filme representa o profissional que faz análise de fezes?", resposta: "R: Animais fantásticos e onde habitam." },
    { pergunta: "Qual é a parte anatômica do corpo que pode interceptar ondas sonoras?", resposta: "R: O rádio" },
    { pergunta: "Qual o Mamífero baiano que tá sempre rindo?", resposta: "R: Oxitorrindo" },
    { pergunta: "Qual processo biológico mais lbgtqia+?", resposta: "R: A gaymetogenese." },
    { pergunta: "Qual bioma brasileiro poderia ter feito sucesso no pagode?", resposta: "R: A caatinguelê" },
    { pergunta: "Qual churrascaria carioca é especialista em assar gaúchos?", resposta: "R: Pampa grill" },
    { pergunta: "Qual protozoário é traficante de metralhadoras?", resposta: "R: É o trypanossoma uzi." },
    { pergunta: "Qual primata manda você rir em outro lugar?", resposta: "R: É o go-ri-la." },
    { pergunta: "Uma planta surgiu no fim de uma missa. Qual o nome da planta?", resposta: "R: Amém-doeira." },
    { pergunta: "Um verme parasita de humanos ouviu um rapper br e morreu minutos depois. Qual o nome do rapper?", resposta: "R: Vermicida." },
    { pergunta: "Qual é o animal parasita preferido dos matemáticos?", resposta: "R: Pi-olho." },
    { pergunta: "Qual é o vegetal que surgiu da fusão da Matemática com a botânica?", resposta: "R: Pi-menta" },
    { pergunta: "Qual doença tem uma grande amizade com a companhia elétrica Light?", resposta: "R: A amigdalight" },
    { pergunta: "Uma água-viva e um platelminto estavam em guerra. Qual é a guerra?", resposta: "R: A guerra dos cem ânus." },
    { pergunta: "Qual é o estilo de música favorito da caatinga?", resposta: "R: É o sertão-nejo" },
    { pergunta: "Qual cidade europeia tem mais show de humor?", resposta: "R: Pa Ri" },
    { pergunta: "Qual o nome do chinês que adora doce?", resposta: "R: Chan Ti Li" },
    { pergunta: "Qual o programa de tv favorito do Doutor Dolittle?", resposta: "R: Conversa com Miau" },
    { pergunta: "Qual parte do corpo é um grande vazio?", resposta: "R: Sovácuo" },
    { pergunta: "Por que o Chaves não assiste o filme Meu Malvado Favorito?", resposta: "R: Porque ninguém tem paciência com Minion" },
    { pergunta: "Qual personagem do folclore brasileiro que o Professor Girafales mais gosta?", resposta: "R: É o boi tata tá tá ta ta!" },
    { pergunta: "Qual jogador de futebol trabalhava com construção civil?", resposta: "R: Entúlio Maravilha" },
    { pergunta: "Qual religioso gosta de cantar as músicas da Frozen?", resposta: "R: Cléri-go, Cléri-gooooo" },
    { pergunta: "Qual banda que se piscar, vira da umbanda?", resposta: "R: Blink - one- exú" },
    { pergunta: "Qual app de música que também é um ator?", resposta: "R: É o Vim Deezer" },
    { pergunta: "Qual rapper que quando dá cavalo-de-pau fica enjoado?", resposta: "R: Drift Cent" },
    { pergunta: "Nos Estados Unidos, como a CIA faz para prender pessoas?", resposta: "R: Ela erra, pois é errando que CIA prende" },
    { pergunta: "Por que Darwin não deixava nenhum de seus filhos investirem em sua empresa?", resposta: "R: Porque ele não criaconista" },
    { pergunta: "Qual programa de tv favorito das cabras?", resposta: "R: É o Big Bode Brasil" },
    { pergunta: "Qual é o grupo de pagode que vive no fliperama?", resposta: "R: É o Fundo de Pinball" },
    { pergunta: "Por que o matemático oriental estava com os dedos todos enrugados?", resposta: "R: Porque ele estava na 3,14i(pi)-china" },
    { pergunta: "Por que as aves não sobrevoam o Japão em momentos de crise?", resposta: "R: Porque elas estavam com a Ásia quebrada" },
    { pergunta: "Sabe por que o sol não conversa com ninguém?", resposta: "R: Porque é melhor solzinho do que mal acompanhado" },
    { pergunta: "O que é um pontinho preto em um microscópio?", resposta: "R: Uma blacktéria" },
    { pergunta: "Um famoso cantor estava com dor nas costas. Deram a ele duas opções de remédio. O que disseram?", resposta: "R: Escoliose" },
    { pergunta: "Qual é a comida que liga e desliga?", resposta: "R: Strogonoff" },
    { pergunta: "Qual é a lanchonete favorita dos góticos?", resposta: "R: Black Donnald" },
    { pergunta: "Qual é o nome do cachorro do Michael Jackson?", resposta: "R: My Cão Rex-on" },
    { pergunta: "Qual é o desenho favorito do Michael Jackson?", resposta: "R: Smurf Criminal" },
    { pergunta: "Qual animal nas histórias em quadrinhos adorava emitir sons?", resposta: "R: A onomatopeira" },
    { pergunta: "Por que o Superman vai sempre à igreja?", resposta: "R: Porque ele é o Clark Crente" },
    { pergunta: "Qual é o monarca que te protege dos mosquitos?", resposta: "R: É o Rei pelente" },
    { pergunta: "Qual grupo musical em que todo mundo está resfriado?", resposta: "R: Atim balada" },
    { pergunta: "Qual é o doce preferido dos gaúchos?", resposta: "R: Doce de leitchê" },
    { pergunta: "Qual é a atriz que ajuda a curar machucados?", resposta: "R: Gazi Massafera" },
    { pergunta: "Quando tem criança russa em festa junina, o que é que eles menos gostam?", resposta: "R: Os Stalinnhos" },
    { pergunta: "Qual grupo animal precisa de você?", resposta: "R: Arac need you" },
    { pergunta: "Qual é o ex-jogador de futebol que não toma banho?", resposta: "R: O Ed-imundo" },
];

let perguntasEmbaralhadas = [];
let perguntaAtualIndex = -1;

function embaralharPerguntas() {
    perguntasEmbaralhadas = [...perguntasERespostas];  // Cria uma cópia das perguntas e respostas
    for (let i = perguntasEmbaralhadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntasEmbaralhadas[i], perguntasEmbaralhadas[j]] = [perguntasEmbaralhadas[j], perguntasEmbaralhadas[i]];
    }
}

function mostrarPergunta() {
    // Se ainda não tiver embaralhado as perguntas ou se já mostrou todas, embaralhe novamente
    if (perguntasEmbaralhadas.length === 0 || perguntaAtualIndex === perguntasEmbaralhadas.length - 1) {
        embaralharPerguntas();
        perguntaAtualIndex = -1;
    }

    perguntaAtualIndex++;
    const perguntaElement = document.getElementById("pergunta");
    const respostaElement = document.getElementById("resposta");
    const contadorElement = document.getElementById("contador");

    perguntaElement.textContent = perguntasEmbaralhadas[perguntaAtualIndex].pergunta;

    // Se houver uma resposta, exiba-a
    if (perguntasEmbaralhadas[perguntaAtualIndex].resposta) {
        respostaElement.textContent = perguntasEmbaralhadas[perguntaAtualIndex].resposta;
    } else {
        respostaElement.textContent = "";  // Limpa a resposta se não houver uma
    }

    // Atualiza o contador
    contadorElement.textContent = `Pergunta ${perguntaAtualIndex + 1} de ${perguntasEmbaralhadas.length}`;
}

// Inicializa embaralhamento no carregamento da página
embaralharPerguntas();
