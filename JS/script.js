const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual componente do computador é diretamente responsável pelo processamento de instruções e execução de cálculos lógicos na máquina?",
        alternativas: [
            {
                texto: "Unidade central de processamento (Cpu).",
                afirmacao: ""
            },
            {
                texto:  "Memoria de acesso aleatoria (RAM)",
                afirmacao: ""
            }    
           
        ]
    },
    {
       
            enunciado: "Qual é a principal função da memória RAM em um computador?",
            alternativas: [
                {
                    texto: "A RAM serve como uma área de trabalho rápida para que o processador acesse de imediato as informações que estão em uso no momento.",
                    afirmacao: ""
                },
                {
                    texto:  "O processamento gráfico é feito pela placa de vídeo (GPU) ou pela memória de vídeo dedicada (VRAM).",
                    afirmacao: ""
                }    
               
            ]
        },
        {
            enunciado: "Qual é a principal vantagem de utilizar um SSD em vez de um HD tradicional (disco rígido)?",

            alternativas: [
                {
                    texto: "Em relação ao custo por gigabyte, os HDs ainda costumam ter um valor por GB menor em capacidades muito altas."
                    afirmacao: ""
                },
                {
                    texto:    "Como utiliza memória flash (sem discos giratórios mecânicos ou agulhas de leitura), o SSD lê e grava dados quase instantaneamente.",
               
                    afirmacao: ""
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
