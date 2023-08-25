import Header from "./Components/Header"
import Sidenav from "./Components/Sidenav"
import { DataContextProvider } from "./Context/DataContext"
import Resume from "./Pages/Resume"
import Vendas from "./Pages/Vendas"
import "./Style.css"
function App() {

  return (
      <DataContextProvider>
        <div className='container'>
          <Sidenav />
          <main>
            <Header />
            <Resume />
            <Vendas />
          </main>
        </div>
      </DataContextProvider>
  )
}

export default App
