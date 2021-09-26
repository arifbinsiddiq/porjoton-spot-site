import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons'
import './Spot.css';

const Spot = (props) => {

    // distructuring data
    const {name, img, location, distance, costs, visited} = props.spot;

    // using font awesome
    const element = <FontAwesomeIcon icon={faStreetView} />

    return (
        <div className="spot-cart">
            <div className="cart">
                <img src={img} alt="" />
                <h2 className="spots-name">{name}</h2>
                <p className="location"><b>Location:</b> {location}</p>
                <p className="distance">Distance from Sylhet city (in km) <b>{distance}</b></p>
                <p className="visited">visited <b>{visited}</b> per day</p>
                <p className="costs"><span><b>Costs:</b> $</span>{costs}</p>
                <button
                onClick={ () => props.hendleSpotView(props.spot)} 
                className="view-btn"
                >{element}view</button>
            </div>
        </div>
    );
};

export default Spot;