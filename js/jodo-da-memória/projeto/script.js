let sessaoJogo = document.querySelector('.game')
let carta1 = ''
let carta2 = ''
let pontos = 0

function play(){
    pegarDados()
}

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

            // Crie as cartas dinamicamente
            dados.cartas.forEach(cartas => {
            gerarCartas(cartas);
        });
    })
    .catch(error => console.log("Erro ao carregar JSON: ", error));
}

//criação das cartas
function gerarCartas(cartas){
    let carta = document.createElement("div")
    carta.setAttribute('class', 'card') 
   
     
    // carta.textContent = cartas.nome
    sessaoJogo.appendChild(carta)


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
        //comparação
        
        if (carta1 === '') {
            carta1 = cartas.cor
            console.log('carta1: ' + carta1)

        } else if (carta1 === cartas.cor){
            pontos ++
            console.log('cartas iguais, vc tem '  + pontos + 'pontos')
            carta1 = ''
        }
        else {
            console.log('errada')
        }
        }

    })
}

//definir carta fora da função pq ta dando erro na hora de reiniciar as cartas todo o resto ta ok