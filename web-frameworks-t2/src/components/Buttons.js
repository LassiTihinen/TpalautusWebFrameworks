import styles from './Buttons.module.css';



export default function Buttons(props) {
    return (
        <div>
            <div classnames ={styles.buttonstyle}>
            <button onClick={props.addStrawberries}>
            Strawberries
            </button>
            <button onClick={props.addYoghurt}>
            Yoghurt
            </button>
            <button onClick={props.addCarrots}>
            Carrots
            </button>
            <button onClick={props.addOnions}>
            Onions
            </button>

            </div>
            
        </div>
        
    )
}




