import React from "react";

const ChangeSetHeader = () => {
  return (
    <div className="row">
      <div className="col-lg-1">
        <strong>ChangeSet</strong>
      </div>
      <div className="col-lg-2">
        <strong>CheckedIn by</strong>
      </div>
      <div className="col-lg-3">
        <strong>Comment</strong>
      </div>
      <div className="col-lg-6">
        <strong>Work Items</strong>
      </div>
    </div>
  );
};

export default ChangeSetHeader;
