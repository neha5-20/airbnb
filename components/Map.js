import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({});

    // transform searchResults object into { latitude: 52.516272, longitude: 13.377722 } object

    const coordinates = searchResults.map(result => ({
        longitude:result.long,
        latitude:result.lat,
    }))

    const center = getCenter(coordinates);

    const[viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,

    });

    return (
        <ReactMapGL mapStyle='mapbox://styles/neha2052/ckspsompl0l1l17owcm7pas6u' mapboxApiAccessToken={process.env.mapbox_key} {...viewport} onViewportChange={nextViewport => setViewport(nextViewport)}>
            {searchResults.map(result =>(
                <div key={result.long}>
                    <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
                        <p role="img" aria-label="push-pin" onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce">📌</p>
                    </Marker>
                    {selectedLocation.long===result.long ? (
                        <Popup className="text-red-400 z-50 m-3" onClose={() => setSelectedLocation({})} closeOnClick={true} latitude={result.lat} longitude={result.long}>
                            <div className="p-1">{result.title}</div>
                        </Popup>

                    ):(
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
