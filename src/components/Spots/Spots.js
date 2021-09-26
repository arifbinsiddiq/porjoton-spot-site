import React, { useEffect, useState } from 'react';
import Spot from '../Spot/Spot';
import View from '../View/View';
import './Spots.css';

const Spots = () => {
    // all States
    const [spots, setSpots] = useState([]);
    const [view, setView] = useState([]);

    // loading data
    useEffect( () =>{
        fetch('./spots.json')
        .then(res => res.json())
        .then(data => setSpots(data))
    },[]);

    // view button click handle
    const handleSpotView = (spot) => {
        const newView = [...view, spot]
        setView(newView)
    }

    return (
        <div className="spots">
            <div className="spots-container">
                {
                    spots.map(spot => <Spot 
                        key={spot.id}
                        spot={spot}
                        handleSpotView={handleSpotView}
                    >
                    </Spot>)
                }
            </div>
            <div className="view-container">
                    <View view={view}></View>
            </div>
        </div>
    );
};

export default Spots;