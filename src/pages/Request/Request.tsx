import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from 'react-leaflet'
import React, {useState, useEffect} from "react";



const Location: React.FC<{ flagState: boolean }> = ({setCoords}) => {
    const map = useMapEvents({
        mousemove(){
            setCoords(Object.values(map.getCenter()))
        }
    })
    return null
}

const Request = () => {
    const [origin, setOrigin] =useState([30.11401658832482, 51.54305510286832])
    const [destination, setDestination] = useState([])
    const [coords, setCoords] = useState([30.11401658832482, 51.54305510286832])
    return (
        <MapContainer
            style={{height: "100%", width: "100%"}}
            center={coords}
            zoom={15}
            minZoom={3}
            maxZoom={19}
            maxBounds={[[-85.06, -180], [85.06, 180]]}
            scrollWheelZoom={true}
        >
            <TileLayer
                url="https://map.pishgamanasia.ir/tile/{z}/{x}/{y}.png"
            />
            {origin.length === 0 || destination.length === 0 ? <Marker position={coords}>
                <Popup>
                {origin.length === 0 ? "مبدا":"مقصد"}
                </Popup>
            </Marker> : ""}
            {
                origin.length !== 0 ? <Marker position={origin}><Popup>مبدا</Popup></Marker>:""
            }
            {
                destination.length !== 0 ? <Marker position={destination}><Popup>مقصد</Popup></Marker>:""
            }
            <Location setCoords={setCoords}/>
        </MapContainer>
    );
};

export default Request;
