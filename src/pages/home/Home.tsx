import { useState } from "react";
import Display from "../../components/display/Display";
import TemperatureInput from "../../components/temperatureInput/TemperatureInput";
import "./Home.css";

const Home = () => {
    const [temperatureC, setTemperatureC] = useState<string>('');
    const [temperatureF, setTemperatureF] = useState<string>('');

    return ( 
        <main>
            <h1>Temperatur Rechner</h1>
            <TemperatureInput temperatureC={temperatureC} setTemperatureC={setTemperatureC} temperatureF={temperatureF} setTemperatureF={setTemperatureF}/>
            <Display temperatureC={temperatureC} />
        </main>
    );
}

export default Home;