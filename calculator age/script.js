var nav = document.getElementsByTagName('nav')[0]
var local = document.getElementsByName('frame')[0]
var botao1 = document.getElementsByTagName('a')[0]
var botao2 = document.getElementsByTagName('a')[1]
var botao3 = document.getElementsByTagName('a')[2]
var botao4 = document.getElementsByTagName('a')[3]
var botao5 = document.getElementsByTagName('a')[4]
var menu = document.getElementById('menu')


function reagrupar(){
    nav.style.flexFlow = 'row'
    nav.style.flexWrap = 'wrap'
    local.style.display = 'block'
    botao1.style.margin ='1px'
    botao2.style.margin ='1px'
    botao3.style.margin ='1px'
    botao4.style.margin ='1px'
    botao5.style.margin ='1px'
    if (window.innerWidth < 600){
        menu.style.display = 'block'
        nav.style.display = 'none'
    }
}

function clickmenu(){
    if(window.innerWidth<600 && nav.style.display =='none'){
        nav.style.display = 'flex'
    }
    else if (window.innerWidth<600 && nav.style.display =='flex'){
        nav.style.display = 'none'
    }
}