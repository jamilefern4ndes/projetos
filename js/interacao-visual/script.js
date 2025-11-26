const niveis      = document.querySelectorAll('.nivel') //aray 
const btnPrevious = document.querySelector('#previous') //botão anterior
const btnNext     = document.querySelector('#next')     //botão próximo
let indice = 0

btnNext.addEventListener('click', ()=>{
    if(indice<=niveis.length-1){
        niveis[indice].style.background = 'rgb(40, 80, 114)'
        indice ++ 
        verId()
    }
})

btnPrevious.addEventListener('click', ()=>{
    if(indice>0){
        indice--
        niveis[indice].style.background = 'transparent'
        verId()
    }
})
//controle de funcionalidade
function verId(){
    console.log(indice)
}