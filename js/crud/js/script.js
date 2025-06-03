const formNovoClient = document.querySelector('.novoCliente')
const table = document.querySelector('.tbl')

function abrirForm() {
    formNovoClient.style.display = 'flex';
    table.style.opacity ='0.2'
    console.log('novo formulário')
    nameClient.focus()

    document.querySelector('#closeForm').addEventListener('click', ()=>{
        formNovoClient.style.display = 'none';
        table.style.opacity ='1'
        espacoDesativado = false
    })
    let fecharJanela = false
    document.addEventListener("keydown", function(event){
    if (event.key === "Escape" && !fecharJanela) {
        formNovoClient.style.display = 'none';
        table.style.opacity ='1'
        fecharJanela = true
        espacoDesativado = false
    }
})
 
}

const clientForm = document.querySelector('#client-form');
clientForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    formNovoClient.style.display = 'none';
    table.style.opacity ='1'

    cadastrarCliente()
})

let nameClient = document.querySelector('#nome')
let emailClient = document.querySelector('#email')
let phoneClient = document.querySelector('#celular')
let cityClient = document.querySelector('#cidade')

function cadastrarCliente(){
    let bodyForm = document.querySelector('#bodyForm')

    bodyForm.innerHTML += `<tr>
                        <td>${nameClient.value}</td>
                        <td>${emailClient.value}</td>
                        <td>${phoneClient.value}</td>
                        <td>${cityClient.value}</td>
                         <td id="acao">
                            <button id="deleteClient" onclick="deleteClient()">excluir</button>
                        </td>
                        </tr>`
    console.log('Cliente ' + nameClient.value + ' cadastrado')
    nameClient.value = ''; emailClient.value = ''; phoneClient.value =''; cityClient.value = '';
    espacoDesativado = false
}


//ativação pelo teclado
let espacoDesativado = false
document.addEventListener("keydown", function(event) {
    if (event.key === " " && !espacoDesativado) {
        abrirForm()
        espacoDesativado = true
    }
})

   

 