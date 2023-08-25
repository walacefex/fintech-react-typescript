import { IVenda } from '../../Context/DataContext'

const SalesItem = ({sales}: {sales: IVenda}) => {
  return (
    <div className='venda box'>
      <a href='' style={{fontFamily: "monospace"}}>{sales.id}</a>
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