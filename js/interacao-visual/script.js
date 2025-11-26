const niveis = document.querySelectorAll('.nivel')
// for(let i = 0; i<niveis.length; i++){
//     niveis[i].style.background = 'blue'
// }
const btnPrevious = document.querySelector('#previous')
const btnNext     = document.querySelector('#next')
let indice        = 0

btnNext.addEventListener('click', ()=>{
    if(indice<=niveis.length-1){
        niveis[indice].classList.remove('transparent')
        niveis[indice].classList.add('blue')
        indice ++ 
        verId()
    }
})

btnPrevious.addEventListener('click', ()=>{
    if(indice>0){
        indice--
        niveis[indice].classList.remove('blue')
        niveis[indice].classList.add('transparent')
        verId()
    }
    
    
})

function verId(){
    console.log(indice)
}