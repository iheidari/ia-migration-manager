import React from "react";

const WorkItem = props => {
  console.log(props);
  return (
    <div className="row">
      <div className="col-lg-1">{props.id}</div>
      <div className="col-lg-8">{props.title}</div>
      <div className="col-lg-3">{props.state}</div>
    </div>
  );
};

export default WorkItem;
