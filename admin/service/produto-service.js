const listaProduto = () => {
    return fetch(`http://localhost:3000/profile`)
    
    .then(resposta => {
       
       return resposta.json()
    })   
 }

const criaProduto = (nome, preco, descricao) => {
    return fetch(`http://localhost:3000/profile`, {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify({
        nome: nome,
        preco: preco,
        descricao: descricao
      })
   })
   .then(resposta => {
      return resposta.json();
   })
}

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
       method: 'DELETE'
    })
 } 
 
 
 // Exporta as funções listaClientes e criarClientes 
 // para que elas possam ser usadas em outros módulos/arquivos.
 export const produtoService = {
    listaProduto,
    criaProduto,
    removeProduto 
 }