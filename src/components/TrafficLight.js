import React, { Component } from 'react'
import LightButton from './LightButton.js'

export class TrafficLight extends Component {
    constructor(props) {
        super(props)
        this.changeToRed = this.changeToRed.bind(this);
        this.changeToYellow = this.changeToYellow.bind(this);
        this.changeToGreen = this.changeToGreen.bind(this);
        this.state = {activeColor: "red"}
    }

    changeToRed() {
        this.setState({activeColor: "red"})
    }

    changeToYellow() {
        this.setState({activeColor: "yellow"})
    }

    changeToGreen() {
        this.setState({activeColor: "green"})
    }

    render() {
        return (
            <div className={this.props.className} >
                <LightButton className="light-button" style={this.state.activeColor === "red" ? {backgroundColor: "red"} : null} onClick={this.changeToRed} />
                <LightButton className="light-button" style={this.state.activeColor === "yellow" ? {backgroundColor: "yellow"} : null} onClick={this.changeToYellow} />
                <LightButton className="light-button" style={this.state.activeColor === "green" ? {backgroundColor: "green"} : null} onClick={this.changeToGreen} />
            </div>
        )
    }
}

export default TrafficLight
