import React, { Component } from 'react';
import ChangeSetInput from './ChangeSetInput';
import ChangeSetList from './ChangeSetList';

export default class ChangeSetManager extends Component {
    constructor() {
        super();
        this.state = {
            mode: "input"
        };
    }
    submit = () => {
        
        this.setState({ mode: "list" });
    }
    render() {
        const s = this.state;
        return (
            <div>
                {s.mode === "input" ? <ChangeSetInput submitClick={this.submit} /> : <ChangeSetList />}
            </div>
        )
    }
}
