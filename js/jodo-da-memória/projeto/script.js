let sessaoJogo = document.querySelector('.game')
let carta1 = ''
let carta2 = ''
let pontos = 0
let acertos = []


//pegar dados e criar as cartas
const url = 'cards.json'
function pegarDados() {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (!dados.cartas) {
                console.log("Erro: JSON não contém 'cartas'");
                return;
            }

            console.log("Quantidade de cartas: " + dados.cartas.length);

            // Limpa a sessão p criar as cartas
            sessaoJogo.innerHTML = ""

            // Crie as cartas
            dados.cartas.forEach(cartas => {
            gerarCartas(cartas)
        });
    })
    .catch(error => console.log("Erro ao carregar JSON: ", error))
}


function gerarCartas(cartas){
    let carta = document.createElement("div")
    carta.setAttribute('class', 'card') 
    sessaoJogo.appendChild(carta)

    //manter cartas viradas quando acertadas
    if (acertos.includes(cartas.cor)) {
        carta.style.background = cartas.cor
    }

    //click
    carta.addEventListener('click', () => {
        if (carta.style.background == cartas.cor){
            carta.classList.toggle('virada')
            carta.style.background = "url('../imagens/carta.png')"

        }else{
            carta.classList.toggle('virada')
            setTimeout(() => {
            carta.style.background = cartas.cor
        }, 550)
        
        if (carta1 === '') {
            carta1 = cartas.cor
            console.log('carta1: ' + carta1)
         } 
        else if (carta1 != ''){
            carta2 = cartas.cor
            console.log ('carta2: '+ carta2)
            comparar(carta1, carta2)
        }
        }
    })
}
function comparar(c1, c2){
    if (c1 === c2){ 
        pontos ++ 
        acertos.push(c1)
        console.log ('cartas iguais')
        console.log ('pontuação: ' + pontos)
        console.log (acertos)
        carta1 = ''
        carta2 = ''
    }
    else{
        console.log ('cartas diferentes')
        carta1 = ''
        carta2 = ''
    }
    setTimeout(() => {
        pegarDados()
    },2000)
}

