import React from 'react';

const panel = (props) => {
    return (
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading text-center">{props.name}</div>
            <div className="panel-body">Panel Content</div>
          </div>
        </div>
    );
}

export default panel;