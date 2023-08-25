import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { IVenda } from '../Context/DataContext'

type WithoutSalesDate = Omit<IVenda, 'data'>

const Venda = () => {
  const { id } = useParams<{id: string}>()
  const { 
    data, 
    loading } = useFetch<WithoutSalesDate>(`https://data.origamid.dev/vendas/${id}`)
  
  if(data === null) return null;

  return (
    <div>
      <div className='box mb'>
        Id: {data.id}
      </div>
      <div className='box mb'>
        Nome: {data.nome}
      </div>
      <div className='box mb'>
        Preço: {data.
          preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        }
      </div>
      <div className='box mb'>
        Status: {data.status}
      </div>
      <div className='box mb'>
        Pagamento: {data.pagamento}
      </div>
    </div>
  )
}

export default Venda