import React, { Component } from 'react';
import ChangeSet from './ChangeSet';


export default class ChangeSetList extends Component {
  render() {
    return (
      <div>
        <ChangeSet />
        <ChangeSet />
      </div>
    )
  }
}
