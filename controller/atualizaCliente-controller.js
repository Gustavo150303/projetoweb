import {clienteService} from "../service/clientes-service.js"
const pegaURL = new URL(window.location)
//console.log(pegaURL)

const id = pegaURL.searchParams.get('id')
//console.log(id)

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-nome]')

clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome 
    inputEmail.value = dados.email 
})

