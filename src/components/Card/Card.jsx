import styles from "./Card.module.scss"

export default function Card(props){
    return(
        <div className={`${styles.CardContainer} container-fluid `}>
            <div className={`${styles.cardIcon}`}>
                {props.icon}
            </div>
            <p className={`${styles.cardTitle} `}>{props.cardTitle}</p>
            <p className={`${styles.cardAmount}`}>{props.amount}</p>
        </div>
    )
}