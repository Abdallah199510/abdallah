import { useReducer } from "react";

function Register() {

   const reducer=(state,action)=>{
    switch(action)
    {
        case 'plus':
        return state + 1
        case 'minus':
        return state-1
        default:
        return state
        
    }
   }

    const initialvalue=0

    const [state,dispatch]=useReducer(reducer,initialvalue)

    return ( 
        <>
       
         <button onClick={()=>dispatch('plus')}>+</button>
         <button  onClick={()=>dispatch('minus')}>-</button>
         {state}
        
        </>
     );
}

export default Register;