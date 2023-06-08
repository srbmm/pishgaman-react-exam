import axios from "./axois";
import {REQUEST_API} from "../constants/API"

// Request for the vehicle
const Request = async (userToken: string, vehicleUserTypeId: number, source, destination) => {
    const {data} = await axios.post(REQUEST_API, {userToken, vehicleUserTypeId, source, destination})
    if (data.status === 0){
        return 0
    }else if (data.status === 1) {
        return data
    }
}
export default Request