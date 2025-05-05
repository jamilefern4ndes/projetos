
function ativar(){ 
    let tempoUser = parseInt(document.querySelector('#time').value)
    let telaMudanca = document.querySelector('#telaMudanca')
    let opcaoDeCor = document.querySelector('#cores').value
    setTimeout(mudanca, `${tempoUser}000`)

    function mudanca(){
        telaMudanca.style.backgroundColor = opcaoDeCor
        console.log(opcaoDeCor)
    }


    // function corAleatoria(){
    // for(c = 1; c<=7; c++){
    //     telaMudanca.classList.add(`cor${c}`)
    // }}
}

//a alteração de cor aleatorieamente nao estava indo de acordo com a ideia principal, por tanto, pausei o projeto.