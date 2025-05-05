var nav = document.getElementsByTagName('nav')[0]
var local = document.getElementsByName('frame')[0]
const botao1 = [...document.getElementsByTagName("a")]  //usando spreat
var menu = document.getElementById('menu')


function reagrupar(){
    nav.style.flexFlow = 'row'
    nav.style.flexWrap = 'wrap'
    local.style.display = 'block'

    botao1.forEach(element=>{             //transformado em array com spreat
        element.style.margin = '1px'  
    })

    if (window.innerWidth < 600){
        menu.style.display = 'block'
        nav.style.display = 'none'
    }
}

function clickmenu(){
    if(window.innerWidth<600 && nav.style.display =='none'){
        nav.style.display = 'flex'
    }
    else if (window.innerWidth<600){
        nav.style.display = 'none'
    }
}