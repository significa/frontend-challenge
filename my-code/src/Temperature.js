import React from 'react'

export function Veredict(props) {
    return (props.celsius >= 100) ? <h1>Will boil</h1> :
        <h1 >Will not boil</h1>;
}

class TempInput extends React.Component {
    state = {
        temperature: 0
    };

    change = (e) => {
        // this.setState({ temperature: e.target.value })
        this.props.tempChange(e.target.value);
    }

    render() {
        return (
            <>
                <h1>{this.props.temperature}° {this.props.scale}</h1>
                Enter temperature in {this.props.scale}: <input value={this.props.temperature} onChange={this.change} type="number"></input>
            </>
        )
    }

}

export class Calculator extends React.Component {

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    render() {
        return (
            <>
                <TempInput scale="Celsius" temperature={this.toCelsius} />
                <TempInput scale="Farhrenheit" temperature={this.toFahrenheit} />
            </>
        )
    }
}