import React from 'react'
import { useData } from '../Context/DataContext';

const Resume = () => {
  const {data} = useData();
  console.log(data)
  return (
    <div>Resume</div>
  )
}

export default Resume