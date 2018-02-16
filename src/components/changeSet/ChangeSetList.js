import React, { Component } from 'react';
import ChangeSetContainer from './ChangeSetContainer';


export default class ChangeSetList extends Component {
  render() {
    const p = this.props;
    const cs = p.data.map((changeSet) => <ChangeSetContainer key={changeSet.id} id={changeSet.id} />)
    return (
      <div>
        {cs}
      </div>
    )
  }
}
