import React from "react";

const Input = (props) =>{
    return(
        <input type={props.type} id={props.id} placeholder={props.placeholder} autoComplete="off" value={props.value} onChange={props.onChange}/>
    )
}

export default Input;