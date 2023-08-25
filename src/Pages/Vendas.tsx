import SalesItem from "../Components/SalesItem";
import { useData } from "../Context/DataContext";

const Vendas = () => {
  const {data} = useData();
  if(data === null) return null;

  return (
    <ul>
      {data.map((sales) => (
        <li key={sales.id}>
          <SalesItem sales={sales} />
        </li>
      ))}
    </ul>
  )
}

export default Vendas