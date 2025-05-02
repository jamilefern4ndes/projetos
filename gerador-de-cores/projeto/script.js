let telaQueMudaCor = document.querySelector('.telaDeCor')
let codigo = document.querySelector('#codCor')

function gerarCor() {
    let RR = Math.floor(Math.random() * 256)
    let GG = Math.floor(Math.random() * 256)
    let BB = Math.floor(Math.random() * 256)

    // Convertendo para formato hexadecimal com 2 dígitos
    let newColor = `#${RR.toString(16).padStart(2, '0')}${GG.toString(16).padStart(2, '0')}${BB.toString(16).padStart(2, '0')}`

    telaQueMudaCor.style.backgroundColor = newColor;
    codigo.style.display = 'block'
    codigo.textContent = newColor
}