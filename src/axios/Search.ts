import axios from "./axois";
import {SEARCH_API} from "../constants/API"

// search vehicle req
const Search = async (value: string, token: string) => {
    const {data} = await axios.get(SEARCH_API + `?SearchTerm=${value}&UserToken=${token}`)
    if (data.status === 0){
        return 0
    }else if (data.status === 1) {
        return data.data
    }
}
export default Search