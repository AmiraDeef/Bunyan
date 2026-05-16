import styles from "./cardStatus.module.css"

function CardStatus({counter,title,icon}){
   
    return(
        <><div className={`${styles.cardStatus} d-flex align-items-center gap-4`}>
    <div className={`${styles.icon} w-100 d-flex align-items-center justify-content-center`}><i className={`fa-solid ${icon}`} ></i></div>
    <div className={`${styles.info} d-flex flex-column align-items-center gap-3 w-100`}>
        <span className={styles.counter}>{counter}</span>
        <span className={styles.info}>{title}</span>

    </div>
</div></>
    )
}

export default CardStatus



