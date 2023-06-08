import {Btn, CenterBox, Map, SearchBox, BottomBox} from "../../components";
import React, {useEffect, useState} from "react";
import Def from '../../constants/DefualtCenterOfMap'
import styles from "./Request.module.css"
import GreenMarker from "../../assets/markers/greenMarker.ico";
import RedMarker from "../../assets/markers/redMarker.ico";
import Search from "../../axios/Search";
import RequestVe from "../../axios/Request";
import {getToken, setToken} from "../../token/Token";
import {toast} from "react-toastify";

// Request Vehicle Page
const Request:React.FC = ({setIsLogin}) => {
    useEffect(() => {
        const token = getToken()
        if (!token) {
            setIsLogin(false);
        }
    }, [])
    // coords is the center of the map that changes with moving
    const [coords, setCoords] = useState<[number, number]>(Def);
    const [origin, setOrigin] = useState<Array<number>>([]);
    const [destination, setDestination] = useState<Array<number>>([]);
    // Vehicle that chooses
    const [vehicle, setVehicle] = useState<number | undefined>(undefined);
    // btn state is for that with one btn do 3 works
    const [btnState, setButtonState] = useState<number>(0);
    const [searchRes, setSearchRes] = useState<Array<{ id: number, name: string }>>([])
    let btnText = ""
    // change text of button with state
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
    const onClickReq = async (e) => {
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
                if (vehicle !== undefined && origin.length !== 0 && destination.length !== 0) {
                    const token = getToken()
                    const source = origin.join(",");
                    const dest = destination.join(",");
                    console.log({token, vehicle, source, dest})
                    const data = await RequestVe(token, vehicle, source, dest);
                    if (data.status === 0) {
                        setIsLogin(false)
                        setToken("")
                    } else if (data.status === 1) {
                        toast.success(data.message)
                        setOrigin([])
                        setDestination([])
                        setButtonState(0)
                    }
                }
                break
            }
        }
    }
    const onBtnSearchClicked = async (value) => {
        const token = getToken()
        if (value.length >= 2) {
            const data = await Search(value, token);
            if (data) setSearchRes(data)
            else {
                setToken("")
                setIsLogin(false)
            }
        } else {
            setSearchRes([])
        }
    }

    return (
        <CenterBox>
            <div className={styles.mapBox}>
                <Map origin={origin} destination={destination} coords={coords} setCoords={setCoords}/>
                <BottomBox>
                    <div>مبدا <img src={RedMarker} style={{width: "16px"}}/> : {
                        origin.length !== 0 ? <span style={{color: "#c42e2e"}}>{origin.join(" ,")}</span> : ""
                    }</div>
                    <div>مقصد <img src={GreenMarker} style={{width: "16px"}}/> : {
                        destination.length !== 0 ? <span style={{color: "#33c42e"}}>{destination.join(" ,")}</span> : ""
                    }</div>
                    <SearchBox placeholder="نوع ماشین آلات" onClick={onBtnSearchClicked} setVehicle={setVehicle} results={searchRes}/>
                    <Btn onClick={onClickReq} style={{width: "100%", borderRadius: "0.5rem"}}>{btnText}</Btn>
                </BottomBox>
            </div>
        </CenterBox>
    );
};

export default Request;