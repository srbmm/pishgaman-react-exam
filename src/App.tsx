import './App.css';
import {Login, Request} from "./pages";
import {CenterBox} from "./components";

function App() {
    return (
        <CenterBox>
            <div style={{height: "60vh", width: "80vw"}}>
                <Request/>
            </div>
        </CenterBox>
    )
}

export default App;