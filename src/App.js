import './css/App.css';
import './css/style.css';

import React from 'react';
import Input from './components/input/Input';
import Label from './components/label/Label';
import Loader from './components/loader/Loader';
import FieldsetGenero from './components/fieldset/FieldsetGenero';
import SelectStatus from './components/selectStatus/SelectStatus';
import PhoneMask from './util/functions/PhoneMask';
import CpfMask from './util/functions/CpfMask';
import Valida_cpf_cnpj from './util/functions/ValidaCPF'
import ListItem from './components/listItem/ListItem';

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
            isError: false,
            isMessage: false,
            isLoading: false,
            message: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cleanInputs = this.cleanInputs.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.formData.name.length === 0 || this.state.formData.age.length === 0 || this.state.formData.gender.length === 0 || this.state.formData.status.length === 0) {
            return this.handleAlert(true, "Atenção! Alguns campos obrigatórios não foram preenchidos 🚩");
        }

        if (this.state.formData.name.length < 3) {
            return this.handleAlert(true, "Atenção! O nome deve conter mais que 3 letras");
        }

        if (this.state.formData.age < 0 || this.state.formData.age > 200) {
            return this.handleAlert(true, "Atenção! A idade informada é inválida!");
        }

        if (Valida_cpf_cnpj(this.state.formData.cpf)) {
            return this.handleAlert(true, "O CPF/CNPJ informado é inválido.");
        }

        this.handleAlert(false, "", true)
        setTimeout(() => {
            this.setState({ isSubmitted: true, data: this.state.formData });
            this.handleAlert(false, "Salvo com sucesso 🥳")
            this.cleanInputs();
        }, 2000);

    }

    handleAlert(onError, message, onLoading) {
        this.setState({ isError: onError, isMessage: true, message: message, isLoading: onLoading });
        setTimeout(() => {
            this.setState({ isError: false, isMessage: false, message: "", isLoading: false });
        }, 4000);
    }

    handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        console.log({ [name]: value });

        if (name === "phone") value = PhoneMask(value)
        if (name === "cpf") value = CpfMask(value)

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

                    <Input id="phone" type="tel" text="Telefone" value={this.state.formData.phone} onChange={this.handleChange} />

                    <div className="btn-group">
                        <button type="submit" id="save" disabled={this.state.isLoading}>
                            <span id="saveText">Salvar</span>
                        </button>

                        <button type="reset" id="reset" onClick={this.cleanInputs} disabled={this.state.isLoading}>
                            <span>Cancelar</span>
                        </button>
                    </div>

                    {this.state.isMessage && (
                        <div className="message">
                            <span id="message" className={this.state.isError ? 'red' : ''}>{this.state.message}</span>
                            {this.state.isLoading && (<Loader />)}
                        </div>
                    )}

                </form>

                {this.state.isSubmitted && (
                    <ListItem data={this.state.data}/>
                )}

            </main>
        );
    }
}
export default App;
