import React from "react";

const FieldsetGenero = (props) =>{
    return(
        <fieldset className="radio-group">
        <legend>Gênero<span className="red">*</span></legend>
        <label htmlFor="yes">
            <input type="radio" id="yes" name="gender" value="Masculino" onChange={props.onChange} checked={props.selected === 'Masculino'} />
            <span tabIndex="0" className="radio-button"></span>
            <span htmlFor="yes">Masculino</span>
        </label>
        <label htmlFor="no">
            <input type="radio" id="no" name="gender" value="Feminino" onChange={props.onChange} checked={props.selected === 'Feminino'}/>
            <span tabIndex="0" className="radio-button"></span>
            <span>Feminino</span>
        </label>
    </fieldset>
    )
}

export default FieldsetGenero;