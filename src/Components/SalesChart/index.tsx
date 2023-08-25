import { LineChart, ResponsiveContainer, XAxis,YAxis, Tooltip, Legend, Line } from 'recharts'
import { IVenda } from '../../Context/DataContext'

type VendaDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: IVenda[]): VendaDay[] {
  const days = data.reduce((acc: {[key: string]: VendaDay}, item) => {
    const day = item.data.split(" ")[0];

    if(!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(days).map((day) => ({...day, data: day.data.substring(5)}));
}

const SalesChart = ({data}: {data: IVenda[]}) => {
  const transformedData = transformData(data)
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3}/>
        <Line type="monotone" dataKey="falha" stroke="#000000" strokeWidth={3}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SalesChart