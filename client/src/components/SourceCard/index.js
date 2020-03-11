import React from "react";

function SourceCard({ header,children }) {
  return (
    

<div className="card text-white bg-info mb-3 mt-3">
  <div className="card-header display-4">
    {header}
    </div>
  <div className="card-body">
    {children}
  </div>
</div>

  );
}

export default SourceCard;
