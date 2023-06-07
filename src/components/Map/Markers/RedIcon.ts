import LeafLet from "leaflet";
import RedMarker from "../../../assets/markers/redMarker.ico";

const RedIcon = new LeafLet.Icon({
    iconUrl: RedMarker,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new LeafLet.Point(38, 38),
    className: 'leaflet-div-icon'
});

export default RedIcon;