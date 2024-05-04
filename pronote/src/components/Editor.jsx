import { Component } from 'react';
import '../App.css';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this); 
        this.state = { value: '' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleReset() {
        this.setState({ value: '' }); 
    }

    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={this.handleChange} value={this.state.value} />
                    <button className="reset-button" onClick={this.handleReset}>Reset</button>
                </div>
                <div className="pronote-container">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>
            </div>
        );
    }
}

export default Editor;
