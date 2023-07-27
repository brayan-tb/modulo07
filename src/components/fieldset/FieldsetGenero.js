import React from "react";

const FieldsetGenero = () =>{
    return(
        <fieldset className="radio-group">
        <legend>Gênero<span className="red">*</span></legend>
        <label htmlFor="yes">
            <input type="radio" id="yes" name="recommend" value="Masculino" defaultChecked />
            <span tabIndex="0" className="radio-button"></span>
            <span htmlFor="yes">Masculino</span>
        </label>
        <label htmlFor="no">
            <input type="radio" id="no" name="recommend" value="Feminino" />
            <span tabIndex="0" className="radio-button"></span>
            <span>Feminino</span>
        </label>
    </fieldset>
    )
}

export default FieldsetGenero;