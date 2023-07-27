import React from "react";

const SelectStatus = (props) =>{
    return(
        <select id="status" name="status" value={props.selected} onChange={props.onChange}>
            <option value="" defaultValue hidden>Selecione...</option>
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Separado</option>
            <option>Divorciado</option>
            <option>Viúvo</option>
        </select>
    )
}

export default SelectStatus;