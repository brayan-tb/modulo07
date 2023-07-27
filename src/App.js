import './css/App.css';
import './css/style.css';

import React from 'react';
import Input from './components/input/Input';
import Label from './components/label/Label';
import Loader from './components/loader/Loader';
import FieldsetGenero from './components/fieldset/FieldsetGenero';
import SelectStatus from './components/selectStatus/SelectStatus';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            formData: {
                name: "",
                age: "",
                gender: "",
                status: "",
                cpf: "",
                phone: ""
            },

            data: {
                name: "",
                age: "",
                gender: "",
                status: "",
                cpf: "",
                phone: ""
            },

            isSubmitted: false,
            isError: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cleanInputs = this.cleanInputs.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isSubmitted: true });
        this.setState({ data: this.state.formData });
        console.log(this.state);
        console.log("enviado!");
        this.cleanInputs()
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log({ [name]: value });
        this.setState({
            formData: { ...this.state.formData, [name]: value }
        })
    }

    cleanInputs() {
        this.setState({
            formData: {
                name: "",
                age: "",
                gender: "",
                status: "",
                cpf: "",
                phone: ""
            },
        })
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit} className="container">
                    <h2>Cadastro 📋</h2>

                    <Input id="name" type="text" text="Nome" value={this.state.formData.name} onChange={this.handleChange} required />

                    <Input id="age" type="number" text="Idade" value={this.state.formData.age} onChange={this.handleChange} required />
                    <FieldsetGenero onChange={this.handleChange} selected={this.state.formData.gender} />

                    <Label for="status" text="Estado civil" required />

                    <SelectStatus selected={this.state.formData.status} onChange={this.handleChange} />
                    <Input id="cpf" type="text" text="CPF" value={this.state.formData.cpf} onChange={this.handleChange} />

                    <Input id="phone" type="text" text="Telefone" value={this.state.formData.phone} onChange={this.handleChange} />

                    <div className="btn-group">
                        <button type="submit" id="save">
                            <span id="saveText">Salvar</span>
                            <Loader />
                        </button>

                        <button type="reset" id="reset" onClick={this.cleanInputs}>
                            <span>Cancelar</span>
                        </button>
                        <span id="message"></span>
                    </div>

                </form>

                {this.state.isSubmitted && (
                    <ul className="container list-item">
                        <h2>Dados 📝</h2>
                        <li>
                            <div className="item-details">
                                <div className="item"><i className="bx bx-user"></i>Nome: {this.state.data.name}</div>
                                <div className="item"><i className="bx bxs-cake"></i>Idade: {this.state.data.age}</div>
                                <div className="item"><i className="bx bx-face"></i>Gênero: {this.state.data.gender}</div>
                                <div className="item"><i className="bx bx-heart"></i>Estado civil: {this.state.data.status}</div>
                                <div className="item"><i className="bx bx-id-card"></i>CPF: {this.state.data.cpf}</div>
                                <div className="item"> <i className="bx bx-phone"></i>Telefone: {this.state.data.phone}</div>
                            </div>
                        </li>
                    </ul>
                )}

            </main>
        );
    }
}
export default App;
