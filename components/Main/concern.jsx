import styles from "./concern.module.css";

export default function concern(){
    return(
        <div className={styles.container}>
            <div >
                <h5>IF YOU HAVE ANY CONCERNS, 
                JUST LEAVE A MESSAGE HERE</h5>
            </div>
            <div className={styles.Input}>
                <input type={styles.input} placeholder="message of user"></input><br/>
                <button>SEND</button>
            </div>
        </div>
    )
}
