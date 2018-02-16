import React from "react";
import WorkItem from "./WorkItem";

const WorkItemList = props => {
  const workItemList = props.workItems.map(wi => <WorkItem key={wi.id} {...wi} />);
  return workItemList;
};

export default WorkItemList;
