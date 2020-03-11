import React from "react";

function WelltopCard({ header,children }) {
  return (
    

<div className="card text-white bg-success mb-3 mt-3">
  <div className="card-header display-4">
  {header}
  </div>
  <div className="card-body">
    {children}
  </div>
</div>

  );
}

export default WelltopCard;
