import { NavLink } from 'react-router-dom'
import { IVenda } from '../../Context/DataContext'

const SalesItem = ({sales}: {sales: IVenda}) => {
  return (
    <div className='venda box'>
      <NavLink to={`/vendas/${sales.id}`} style={{fontFamily: "monospace"}}>
        {sales.id}
      </NavLink>
     <div>
      {sales.nome}
     </div>
     <div>
      {sales.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
     </div>
    </div>
  )
}

export default SalesItem