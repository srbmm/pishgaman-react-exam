import LeafLet from "leaflet";
import GreenMarker from "../../../assets/markers/greenMarker.ico";

const GreenIcon = new LeafLet.Icon({
    iconUrl: GreenMarker,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new LeafLet.Point(38, 38),
    className: 'leaflet-div-icon'
});

export default GreenIcon;