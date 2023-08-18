import React from 'react'
import Input from '../Input'

type State ={
  nome: string;
  email: string;
}

type Action = 
  | {type: "setNome", payload: string}
  | {type: "setEmail", payload: string}


// Deste jeito eh possivel criar um reducer para cada campo do formulario, mas nao eh uma boa pratica
// function reducer(state: State, action: Action){
//   if(action.type === "setNome"){
//     return {...state, nome: action.payload}
//   }

//   if(action.type === "setEmail"){
//     return {...state, email: action.payload}
//   }
//   return state;
// }

function reducer(state: State, action: Action){
  switch(action.type){
    case "setNome":
      return {
        ...state, 
        nome: action.payload
      };
      case "setEmail":
        return {
          ...state, 
          email: action.payload
        };
      default:
        return state;
  }
}

const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, {nome: "", email: "",});
  
  return (
    <div>
      <Input 
      label={`Nome: ${state.nome}`} 
      value={state.nome}
      onChange={({target}) => dispatch({type: "setNome", payload: target.value})}
      />
      <Input 
        label={`Email: ${state.email}`}
        value={state.email}
        onChange={({target}) => dispatch({type: "setEmail", payload: target.value})}
        />
    </div>
  )
}

export default Form