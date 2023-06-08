import React, {useState} from 'react';
import styles from './SearchBox.module.css'
import searchIcon from '../../assets/icon/search.svg'

// Search box and the show the results
const SearchBox:React.FC<{placeholder: string, results: Array<{name: string, id: number}>}> =
    ({placeholder, setVehicle, results, onClick}) => {
    const [value, setValue] = useState("");
    // this flag for show the results if we click on the input
    const [isShow, setIsShow] = useState(false);
    const options = results.map(item => <button key={item.id} onClick={() => {
        setValue(item.name);
        setVehicle(item.id);
        setIsShow(false);
    }}>{item.name}</button>)
    return (
        <div className={styles.search}>
            <div className={styles.searchBox + ` ${results.length !== 0 && isShow? styles.radiusTop : ""}`}>
                <input placeholder={placeholder} value={value} onChange={event => setValue(event.target.value)}
                       onClick={e => setIsShow(true)}/>
                <button onClick={e => onClick(value)} style={{cursor: "pointer"}}><img src={searchIcon}/></button>
            </div>
            <div className={!isShow ? styles.hidden : ""}>
                {results.length !== 0 ?
                    <div className={styles.results}>
                        {...options}
                    </div> : ""}
            </div>
        </div>
    );
};

export default SearchBox;
