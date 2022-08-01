import React, { useReducer, useState } from 'react';


const initialState = [
    {
        id:1,
        name:'A'
    },
    {
        id:2,
        name:'B'
    },
    {
        id:3,
        name:'C'
    }
];


let reducer=(initialState,action)=>{
      
        
    let newState;
    newState= initialState;
    if(action.type == 'remove_student'){
        for (let x in newState) {
        //console.log(x);
        console.log(newState[x].name);
        if(newState[x].id == action.id){
            delete newState[x];
        }

    }       
        //delete newstate.id
    }
    return newState
  }


export default function MyComponent2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    //state
     const[student,setStudent]=useState()

    //function
     let Clickme=(e)=>{
        console.log(e)
        dispatch({type:"remove_student",id:2})
     }
     let getdata = (e)=>{

        console.log('new data'+JSON.stringify(initialState));

    }
     
    //return
  return (
    
    <>
       <div>MyComponent2</div>
       { 
                initialState.length > 0 &&

                initialState.map((currentValue, index, arr)=>{
                    console.log(currentValue)
                    return <h1 key={index}>{currentValue.name}</h1>
                })
            }
       <button type="button" className="btn btn-success" onClick={(e)=>{Clickme(e)}}>Click_Me</button>
       <button type="button" className="btn btn-success" onClick={(e)=>{getdata(e)}}>Remove_student</button>
    </>
  )
}
