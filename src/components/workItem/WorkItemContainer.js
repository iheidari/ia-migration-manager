import React, { Component } from "react";
//import * as Api from "../../api/mock";
import * as Api from '../../api/utility';
import WorkItemList from "./WorkItemList";

export default class WorkItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeSetId: props.changeSetId,
      workItems: []
    };
  }

  callForData = workItemId => {
    Api.GetChangesetWorkItemsById(workItemId).then(resp => {
      console.log(resp);
      this.setState({
        workItems: resp.value
      });
    });
  };

  componentWillMount() {
    if (this.state.changeSetId) {
      this.callForData(this.state.changeSetId);
    }
  }

  render() {
    const s = this.state;
    return (
      <div>
        <WorkItemList {...s} />
      </div>
    );
  }
}
