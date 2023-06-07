import React, {useState} from 'react';
import styles from './SearchBox.module.css'
import searchIcon from '../../assets/icon/search.svg'

const SearchBox: React.FC = ({placeholder, setVehicle, results, onChange}) => {
    const [value, setValue] = useState("");
    const [isShow, setIsShow] = useState(false);
    const options = results.map(item => <button key={item.id} onClick={() => {
        setValue(item.name);
        setVehicle(item.id);
        setIsShow(false);
    }}>{item.name}</button>)
    return (
        <div className={styles.search}>
            <div className={styles.searchBox}>
                <input placeholder={placeholder} value={value} onChange={event => {
                    setValue(event.target.value)
                    onChange(event)
                }}
                       onClick={e => setIsShow(true)}/>
                <span><img src={searchIcon}/></span>
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
