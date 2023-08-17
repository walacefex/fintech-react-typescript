import React from 'react'
import useFetch from './hooks/UseFetch'

type Product = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
}

function App() {
  const [id, setId] = React.useState('p001')
  const products = useFetch<Product[]>('https://data.origamid.dev/produtos')
  const product = useFetch<Product>(`https://data.origamid.dev/produtos/${id}`)

  return (
    <section className='flex'>
      <div>
       {products.data && products.data.map(product => (
        <button 
          onClick={() => setId(product.id)}
          style={{ fontSize:"1rem" }}
          key={product.id}
          >
            {product.nome}
          </button>
       ))}
      </div>
      <div>
        {products.loading && <p>Carregando...</p>}
        {product.data && (
          <ul>
            <li> ID: {product.data.id}</li>
            <li> Nome: {product.data.nome}</li>
            <li> Descrição: {product.data.descricao}</li>
            <li> Quantidade: {product.data.quantidade}</li>
            <li> Preço: {product.data.preco}</li>
          </ul>
        )}
      </div>
      
    </section>
  )
}

export default App
