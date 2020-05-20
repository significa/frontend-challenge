import React from 'react'

export class Toggle extends React.Component {
    state = {
        isOn: false
    };

    change = () => this.setState({ isOn: !this.state.isOn })

    render() {
        return (
            <>
                <button className="btn btn-primary" onClick={this.change} >{this.state.isOn ? "ON" : "OFF"}</button>
            </>
        )
    }
}