import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class ChangeSetInput extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        componentClass="textarea" 
                        placeholder="textarea"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        bsClass="textArea form-control"
                        rows="20"
                    />
                </FormGroup>
                <Button type="submit" onClick={this.props.submitClick}>Submit</Button>
            </div>
        )
    }
}
