import React from 'react';

const Body = ({props1, props2}) => {
  return (
    <div>
      <div className="container-fluid py-4">
        <div className="col spotLight"><h3>{props1}</h3>
            <h5>{props2} </h5>
        </div>
    </div>
    </div>
  )
}

export default Body
