import { UiContextProvider } from "./Hooks/UiContext"
import Header from "./components/Header"
import Content from "./components/Content"
function App() {

  return (
    <UiContextProvider>
      <Header />
      <Content />
    </UiContextProvider>
  )
}

export default App
