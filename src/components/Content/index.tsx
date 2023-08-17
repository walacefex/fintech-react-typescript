import { useUiContext } from '../../Hooks/UiContext'

const Content = () => {
  const {darkMode} = useUiContext();
  return (
    <h1>{darkMode ? "dark" : "light"}</h1>
  )
}

export default Content