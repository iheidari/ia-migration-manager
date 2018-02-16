import React from 'react';
import Author from '../Author';
import WorkItemContainer from '../workItem/WorkItemContainer';

const ChangeSet = (props) => {
  return (
    <div className="row">
      <div className="col-lg-1">
        <a href={props.url || "#"}>{props.id}</a>
      </div>
      <div className="col-lg-2">
        <Author {...props.author} />
      </div>
      <div className="col-lg-3">
        {props.comment}
      </div>
      <div className="col-lg-6">
        <WorkItemContainer changeSetId={props.id} />
      </div>
    </div>
  )
};

export default ChangeSet;