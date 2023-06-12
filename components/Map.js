import { useState } from "react"
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import { getCenter } from "geolib"

function Map ({data}) { 

    const [selectedLocation, setSelectedLocation] = useState({});

const coordinates = data.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
}))

const center = getCenter(coordinates);
const [viewport, setViewport] = useState ({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
})

console.log(process.env.NEXT_PUBLIC_MAPBOX_KEY)

return (
    <ReactMapGL
    mapStyle="mapbox://styles/mikepine/clisoi902009q01qygsk4dj6c"
    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
    {...viewport}
    onViewportChange = {(nextViewport) => setViewport(nextViewport)}
    >  

        {data.map((result) => (
            
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    key={`${result.lat}.${result.long}`}
                    
                    >
                    <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce">📌</p> 
                </Marker>
                
        ))}            
        </ReactMapGL>
)}
export default Map