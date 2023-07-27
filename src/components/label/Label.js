import React from "react";

const Label = (props) =>{
    return(
        <label htmlFor={props.for}>{props.text}
            {props.required && <span className="red">*</span>}
        </label>
    )
}

export default Label;