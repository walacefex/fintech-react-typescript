import React from "react"

const useLocalStorage = (
  key: string, 
  initialValue: string
) : [string, React.Dispatch<React.SetStateAction<string>>]  => {

  const [value, setValue] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initialValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
 }

export default useLocalStorage;