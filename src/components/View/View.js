import React from 'react';
import './View.css';

const View = (props) => {

    const {view} = props;

    let total = 0;
    for(const spot of view){
        total = total + spot.costs;
    }


    

    return (
        <div className="view-details">
            <h2 className="view-spots">View Spots Costs</h2>
            <h4 className="spots-list">Spots List: {props.view.length}</h4>
            <p><b>Total:</b> $ {total}</p>
            <ul className="ul-list">
                {
                    view.map(view => <li>{view.name}</li>)
                }
            </ul>
        </div>
    );
};

export default View;