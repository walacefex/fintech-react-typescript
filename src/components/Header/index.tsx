import { useUiContext } from "../../Hooks/UiContext";

const Header = () => {
  const {darkMode, setDarkMode} = useUiContext();

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
  );
}

export default Header