import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Sidenav from "./Components/Sidenav"
import { DataContextProvider } from "./Context/DataContext"
import Resume from "./Pages/Resume"
import Vendas from "./Pages/Vendas"
import Venda from "./Pages/Venda"
import "./Style.css"
function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className='container'>
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Resume />} />
              <Route path='/vendas' element={<Vendas />} />
              <Route path='/vendas/:id' element={<Venda />} />
            </Routes>          
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
