import React, { Component } from 'react';
import ChangeSetInput from './ChangeSetInput';
import ChangeSetList from './ChangeSetList';
//import { Get } from '../api/call';
//import * as mockApi from '../api/mock';

export default class ChangeSetManager extends Component {
    constructor() {
        super();
        this.state = {
            mode: "input",
            data: {}
        };
    }
    submit = (value) => {
        const data = value.split(/\r?\n/).map(id=>({id}));
        this.setState({ mode: "list", data });
        
        // //const tt = Get('https://jsonplaceholder.typicode.com/posts/10');
        // //const tt = GetAll(['https://jsonplaceholder.typicode.com/posts/1','https://jsonplaceholder.typicode.com/posts/2']);
        // tt.then((resp) => {
        //     console.log(resp);
        // });

    }
    render() {
        const s = this.state;
        return (
            <div>
                {s.mode === "input" ? <ChangeSetInput submitClick={this.submit} /> : <ChangeSetList data={s.data} />}
            </div>
        )
    }
}
