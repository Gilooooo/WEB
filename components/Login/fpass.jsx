import styles from "./fpass.module.css";


export default function Fpass() {
    
    return(
       
        <div className={styles.container}>
        <div className={styles.image}>
        <a href="http://localhost:3000/WEB">
        <button>
        <img src = "LOGO.png"></img>
        </button>
        </a>
        </div>
        
        <div className={styles.pass}>
        <h2>EMAIL</h2>
        <input type="email" />
        <button>CODE</button>
        <h2>CODE</h2>
        <input type="CODE"/>
        <button>CODE</button>
        </div>
        <div className={styles.newpass}>
        <h2>NEW PASSWORD</h2>
        <input type="new pass"/>
        <h2>CONFIRM PASSWORD</h2>\
        <input type="confirm pass"/>
        <p></p>
        <button>CONFIRM</button>
        </div>
        

        </div>
       
       

    );
}