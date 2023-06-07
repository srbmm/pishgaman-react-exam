import {Btn, CenterBox, Map, SearchBox, BottomBox} from "../../components";
import {useState} from "react";
import Def from '../../constants/DefualtCenterOfMap'
import styles from "./Request.module.css"
import GreenMarker from "../../assets/markers/greenMarker.ico";
import RedMarker from "../../assets/markers/redMarker.ico";

const Request = () => {
    const [coords, setCoords] =useState<[number, number]>(Def)
    const [origin, setOrigin] = useState<Array<number>>([]);
    const [destination, setDestination] = useState<Array<number>>([]);
    const [vehicle,setVehicle] = useState<number | undefined>(undefined)
    const [btnState, setButtonState] = useState<number>(0)
    const [searchRes, setSearchRes] = useState<Array<{id: number, name: string}>>([])
    let btnText = ""
    switch (btnState) {
        case 0: {
            btnText = "ثبت مبدا"
            break
        }
        case 1: {
            btnText = "ثبت مقصد"
            break
        }
        case 2: {
            btnText = "ثبت درخواست"
            break
        }
    }
    const onClickReq = (e) => {
        switch (btnState) {
            case 0: {
                setOrigin(coords);
                setButtonState(1);
                break
            }
            case 1: {
                setDestination(coords)
                setButtonState(2);
                break
            }
            case 2: {
                setOrigin([])
                setDestination([])
                setButtonState(0)
                break
            }
        }
    }
    return (
        <CenterBox>
            <div className={styles.mapBox}>
                <Map origin={origin} destination={destination} coords={coords} setCoords={setCoords}/>
                <BottomBox>
                    <div>مبدا <img src={RedMarker} style={{width: "16px"}}/> : {
                        origin.length !== 0 ? <span style={{color: "#c42e2e"}}>{origin.join(" ,")}</span>:""
                    }</div>
                    <div>مقصد <img src={GreenMarker} style={{width: "16px"}}/> : {
                        destination.length !== 0 ? <span style={{color: "#33c42e"}}>{destination.join(" ,")}</span>:""
                    }</div>
                    <SearchBox placeholder="نوع ماشین آلات" setVehicle={setVehicle} results={searchRes}/>
                    <Btn onClick={onClickReq} style={{width: "100%", borderRadius: "0.5rem"} }>{btnText}</Btn>
                </BottomBox>
            </div>
        </CenterBox>
    );
};

export default Request;
