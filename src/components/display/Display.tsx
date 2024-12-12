import "./Display.css";

interface IDisplayProps {
    temperatureC: string
}

const Display: React.FC<IDisplayProps> = (props) => {
    return ( 
        <section className="display">
            <p className={Number(props.temperatureC) < 100 ? '' : 'boiling'}>{Number(props.temperatureC) < 100 ? 'The water is not boiling' : 'The water IS boiling'}</p>
        </section>
    );
}

export default Display;