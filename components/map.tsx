import React from 'react';

interface IMap
{
    mapType: google.maps.MapTypeId,
    mapTypeControl?:boolean;
}

const Map: React.FC<IMap> =({mapType,mapTypeControl = false}) => {
    return (
        <div>
            
        </div>
    )
};

export default Map;