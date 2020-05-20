import React from 'react'

export class NameForm extends React.Component {
    state = {
        name: "Ana",
        surname: "Sousa",
        disabledBtn: true,
        flavor: "coconut",
        min: 3
    };

    ready = () => {
        (
            this.state.name.length > this.state.min - 1 &&
            this.state.surname.length > this.state.min - 1) ?
            this.setState({ disabledBtn: false }) :
            this.setState({ disabledBtn: true }
            );
    }


    change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.ready();
    };


    send = (e) => {
        e.preventDefault();
        alert(this.state.flavor);
    }


    render() {
        return (
            <>
                <h1>{this.state.name} {this.state.surname}</h1>
                <h2>{this.state.flavor}</h2>
                <form onSubmit={this.send}>
                    Name: <input name="name" onChange={this.change} value={this.state.name}></input>
                    Surname: <input name="surname" onChange={this.change} value={this.state.surname}></input>

                    Flavor
                    <select name="flavor" onChange={this.change}>
                        <option>Grapefruit</option>
                        <option>Lime</option>
                        <option selected >Coconut</option>
                        <option>Mango</option>
                    </select>
                    <input disabled={this.state.disabledBtn} type="submit"></input>
                </form>
            </>
        )
    }
}