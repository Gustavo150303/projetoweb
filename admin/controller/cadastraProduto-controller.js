import { produtoService } from "../service/produto-service"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    
        evento.preventDefault()

       const nome = evento.target.querySelector('[data-nome]').value

       const preco = evento.target.querySelector('[data-preco]').value

       const descricao = evento.target.querySelector('[data-descricao]').value

       clienteService.criarClientes(nome, preco, descricao)
        .then(() => {
            
            window.location.href ='../telas/cadastro_concluido.html'
        })
})