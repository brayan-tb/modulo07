import React from "react";

const SelectStatus = () =>{
    return(
        <select id="status" name="status">
            <option value="">Selecione...</option>
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Separado</option>
            <option>Divorciado</option>
            <option>Viúvo</option>
        </select>
    )
}

export default SelectStatus;