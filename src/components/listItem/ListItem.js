import React from "react";

const ListItem = (props) => {
    return (
        <ul className="container list-item">
            <h2>Dados 📝</h2>
            <li>
                <div className="item-details">
                    <div className="item"><i className="bx bx-user"></i>Nome: {props.data.name}</div>
                    <div className="item"><i className="bx bxs-cake"></i>Idade: {props.data.age}</div>
                    <div className="item"><i className="bx bx-face"></i>Gênero: {props.data.gender}</div>
                    <div className="item"><i className="bx bx-heart"></i>Estado civil: {props.data.status}</div>
                    <div className="item"><i className="bx bx-id-card"></i>CPF: {props.data.cpf}</div>
                    <div className="item"> <i className="bx bx-phone"></i>Telefone: {props.data.phone}</div>
                </div>
            </li>
        </ul>
    )
}

export default ListItem;