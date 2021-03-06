import React, { Component } from 'react';
import * as Api from '../api/mock';
import ChangeSet from './ChangeSet';
import ChangeSetHeader from './ChangeSetHeader';

export default class ChangeSetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }

    callForData = (changeset) => {
        Api.GetChangesetDetailById(changeset.id)
            .then((resp) => {
                this.setState({
                    url: resp.url,
                    author: resp.checkedInBy,
                    comment: resp.comment
                });
                return Api.GetChangesetWorkItemsById(changeset.id);
            })
            .then((resp) => {
                console.log('second done');
                console.log(resp);
            }
            );
    }

    componentWillMount() {
        if (this.state.id)
            this.callForData(this.state.id);
    }

    render() {
        const s = this.state;
        //console.log(s);
        return (
            <div>
                <ChangeSetHeader />
                <ChangeSet {...s} />
            </div>
        )
    }
}
