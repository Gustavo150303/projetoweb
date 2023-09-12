import {produtoService} from "../service/produto-service.js"

const criaNovaLinha = (nome, preco, id) => {
   
   const linhaNovoProduto = document.createElement('tr')
   
   const conteudo = `
      <td class="td" data-td>${nome}</td>
      <td>${preco}</td>
      <td>
         <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
         </ul>
      </td>`    
   linhaNovoProduto.innerHTML = conteudo
   linhaNovoProduto.dataset.id = id
   console.log(linhaNovoProduto)
   
   return linhaNovoProduto
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
  
   let ehBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir';
   
   if(ehBotaoDeletar) {
     
     const linhaProduto = evento.target.closest('[data-id]');
     
     let id = linhaProduto.dataset.id;     
     
     produtoService.removeProduto(id)
     .then(() => {
      
        linhaProduto.remove();
     });
   }
 });
 

produtoService.listaProduto()
.then(data => {
   
   data.forEach(element => {
      tabela.appendChild(criaNovaLinha(element.nome, element.preco, element.id))
   })
})
