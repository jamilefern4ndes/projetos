const formNovoClient = document.querySelector('.novoCliente')
const table = document.querySelector('.tbl')
const clientForm = document.querySelector('#client-form')
let clients = JSON.parse(localStorage.getItem('clients')) || []

function abrirForm() {
    formNovoClient.style.display = 'flex'
    table.style.opacity = '0.2'
    console.log('novo formulário')
    nameClient.focus()

    //fechar o formulário clicando no "x"
    document.querySelector('#closeForm').addEventListener('click', () => {
        formNovoClient.style.display = 'none'
        table.style.opacity = '1'
        espacoDesativado = false
    });

    //fechar o formulário teclando "Esc"
    let fecharJanela = false
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && !fecharJanela) {
            formNovoClient.style.display = 'none'
            table.style.opacity = '1'
            fecharJanela = true
            espacoDesativado = false
        }
    });
}

clientForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //fecha o form 
    formNovoClient.style.display = 'none'
    table.style.opacity = '1'
    cadastrarCliente()
});

let nameClient = document.querySelector('#nome')
let emailClient = document.querySelector('#email')
let phoneClient = document.querySelector('#celular')
let cityClient = document.querySelector('#cidade')

function cadastrarCliente() {
    const client = {
        name: nameClient.value,
        email: emailClient.value,
        phone: phoneClient.value,
        city: cityClient.value
    };
    //armazenamento
    clients.push(client)
    localStorage.setItem('clients', JSON.stringify(clients))
    renderClients()
    
    console.log('Cliente ' + nameClient.value + ' cadastrado')

    nameClient.value = ''
    emailClient.value = ''
    phoneClient.value = ''
    cityClient.value = ''
    espacoDesativado = false
}
//atualizar tabela
function renderClients() {
    const bodyForm = document.querySelector('#bodyForm')
    bodyForm.innerHTML = ''
    clients.forEach((client, index) => {
        bodyForm.innerHTML += `<tr>
            <td style="text-transform: capitalize; font-weight: 600;">${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.city}</td>
            <td id="acao">
                <button id="deleteClient" onclick="deleteClient(${index})">excluir</button>
            </td>
        </tr>`
    })
}
//excluir os clientes
function deleteClient(index) {
    clients.splice(index, 1)
    localStorage.setItem('clients', JSON.stringify(clients))
    renderClients()
}

// Ativação pelo teclado
let espacoDesativado = false
document.addEventListener("keydown", function(event) {
    if (event.key === " " && !espacoDesativado) {
        abrirForm()
        espacoDesativado = true
    }
})

// Renderiza os clientes ao carregar a página
renderClients()
