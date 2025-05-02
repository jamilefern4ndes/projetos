let areaCronometro = document.querySelector('#tempo')
let seg = 0
let min = 0
let hora = 0
let intervalo

const formatarDoisAlgarismos = (valor) => valor.toString().padStart(2, '0')
areaCronometro.textContent = `${formatarDoisAlgarismos(hora)} : ${formatarDoisAlgarismos(min)} : ${formatarDoisAlgarismos(seg)}`

function iniciar() {
    if (!intervalo) {
        intervalo = setInterval(() => {
            seg++
            if (seg === 60) {
                seg = 0
                min++
            }
            if (min === 60) {
                min = 0
                hora++
            }
            // console.log(seg)
            atualizarTela()
        }, 1000)
    }
}
function pausar(){
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar(){
    clearInterval(intervalo);
    intervalo = null;
     seg = 0
     min = 0
     hora = 0
    atualizarTela()
}

//atualização da tela a cada segundo/ação do usuário
function atualizarTela() {
    areaCronometro.textContent = `${formatarDoisAlgarismos(hora)} : ${formatarDoisAlgarismos(min)} : ${formatarDoisAlgarismos(seg)}`
}
