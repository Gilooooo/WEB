import styles from "./reg.module.css";

export default function REG (){
    return(
        <div className={styles.container}>
            <div className={styles.image}>
            <a type="button" href="http://localhost:3000/WEB"><img src="LOGO.png" /></a>
            </div>
            <div className={styles.LEFT}>
                <h1>SIGN UP</h1>
            </div>

            <div className={styles.RIGHT}>
                <h6>Username</h6>
                <input type="text"/>
                <h6>Email</h6>
                <input type="text"/>
                <h6>Password</h6>
                <input type="text"/>
                <h6>Confirm Password</h6>
                <input type="text"/>
                <br></br>
                <button id="btn">SIGN UP</button>
            </div>
        </div>
        
    )
}
