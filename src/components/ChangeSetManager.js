import React, { Component } from 'react';
import ChangeSetInput from './ChangeSetInput';
import ChangeSetList from './ChangeSetList';
import { Get, GetAll } from '../api/call';

export default class ChangeSetManager extends Component {
    constructor() {
        super();
        this.state = {
            mode: "input"
        };
    }
    submit = () => {
        //this.setState({ mode: "list" });
        const tt = Get('https://jsonplaceholder.typicode.com/posts/10');
        //const tt = GetAll(['https://jsonplaceholder.typicode.com/posts/1','https://jsonplaceholder.typicode.com/posts/2']);
        tt.then((resp)=>{
            console.log(resp);
        });        
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
