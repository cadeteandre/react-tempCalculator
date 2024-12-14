import "./TemperatureInput.css";

interface ITemperatureInputProps {
    temperatureC: string,
    setTemperatureC: React.Dispatch<React.SetStateAction<string>>
    temperatureF: string,
    setTemperatureF: React.Dispatch<React.SetStateAction<string>>
}

const TemperatureInput: React.FC<ITemperatureInputProps> = (props) => {

    const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') {
            props.setTemperatureF('');
            props.setTemperatureC(e.target.value);
            return;
        }

        props.setTemperatureC(e.target.value);
        props.setTemperatureF(((Number(e.target.value) * 9 / 5) + 32).toFixed(2).toString());
    }
    const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') {
            props.setTemperatureC('');
            props.setTemperatureF(e.target.value);
            return;
        }

        props.setTemperatureF(e.target.value);
        props.setTemperatureC(((Number(e.target.value) - 32) * 5 / 9).toFixed(2).toString());
    }

    return ( 
        <div className="input__container">
            <form>
                <fieldset>
                    <legend>Schreibe Temperatur in Celsius</legend>
                    <input value={props.temperatureC} onChange={(e) => handleCelsiusChange(e)} type="number" />
                </fieldset>
            </form>
            <form>
                <fieldset>
                        <legend>Schreibe Temperatur in Fahrenheit</legend>
                        <input value={props.temperatureF} onChange={(e) => handleFahrenheitChange(e)} type="number" />
                </fieldset>
            </form>
        </div>
    );
}

export default TemperatureInput;