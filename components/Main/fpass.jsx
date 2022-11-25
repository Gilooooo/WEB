import styles from "./fpass.module.css";

export default function Fpass() {

    return(
        <div className={styles.container}>
        <div className={styles.image}>
        <img src = "LOGO.png"></img>
        </div>
        <div className={styles.pass}>
        <h1></h1>
        <h1></h1>
        <h2>EMAIL</h2>
        <input type="email" placeholder="input email here"/>
        <button>CODE</button>
        <h2>CODE</h2>
        <input type="CODE" placeholder="input code here"/>
        <button>CODE</button>
        </div>
        <div className={styles.newpass}>
        <h2>NEW PASSWORD</h2>
        <input type="new pass" placeholder="input new password here"/>
        <h2>CONFIRM PASSWORD</h2>\
        <input type="confirm pass" placeholder="input new password here"/>
        <p></p>
        <button>CONFIRM</button>
        
        </div>
        </div>
    );
}