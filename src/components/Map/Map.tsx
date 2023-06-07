import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from 'react-leaflet';
import Def from '../../constants/DefualtCenterOfMap'
import React, {useState} from "react";
import './Map.css'
import GreenIcon from "./Markers/GreenIcon";
import RedIcon from "./Markers/RedIcon";


const Location: React.FC<{ flagState: boolean }> = ({setCoords}) => {
    const map = useMapEvents({
        mousemove(){
            setCoords(Object.values(map.getCenter()))
        }
    })
    return null
}

const Map:React.FC<{origin: Array<number>, destination: Array<number>,
    coords: [number, number]}> = ({origin, destination, coords, setCoords}) => {
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
            {origin.length === 0 || destination.length === 0 ? <Marker position={coords} icon={origin.length === 0 ? RedIcon : GreenIcon}>
            </Marker> : ""}
            {
                origin.length !== 0 ? <Marker position={origin} icon={RedIcon}></Marker>:""
            }
            {
                destination.length !== 0 ? <Marker position={destination} icon={GreenIcon}></Marker>:""
            }
            <Location setCoords={setCoords}/>
        </MapContainer>
    );
};

export default Map;
