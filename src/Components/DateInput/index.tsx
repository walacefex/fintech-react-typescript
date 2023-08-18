import React from 'react'

type IDataInput = React.ComponentProps<'input'> &{
  label: string;
}

const DateInput = ({label, ...props}: IDataInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} id={label} />
    </div>
  )
}

export default DateInput