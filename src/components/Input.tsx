type InputProps = React.ComponentProps<'input'> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, setState, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom : "1rem"}}>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} onChange={({currentTarget}) => setState(currentTarget.value)}{...props} />
    </div>
  )
}

export default Input;