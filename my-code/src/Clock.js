import React from 'react';


export class Clock extends React.Component {
    state = {
        date: new Date()
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <Greeting name="Ana" />
            </div>
        )
    }
}

export function Greeting(props) {
    return (
        <h1>Welcome, {props.name.toUpperCase()}</h1>
    )
}