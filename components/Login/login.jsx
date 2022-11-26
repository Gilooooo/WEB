import styles from "./login.module.css";

export default function LOGIN() {
    return (
        
        <div className={styles.container}>
        <div className={styles.image}>
        <a href="http://localhost:3000/WEB">
        <button>
        <img src = "LOGO.png"></img>
        </button>
        </a>
        </div>
        <div className={styles.credit}>
        <h1> </h1>
        <h3> EMAIL / USERNAME</h3>
        <input type= "text2"name="username" class="input-box1"/>
        <h3>PASSWORD</h3>
        <input type= "text2"name="password" class="input-box2"/>
        <button class="loginbutton">LOGIN</button>
        </div>
    
        <div className ={styles.TEXT}>
            <a href="http://localhost:3000/reg">
        <button>CREATE ACCOUNT</button>
        </a>
        <a href="http://localhost:3000/fpass"> 
        <button>FORGOT PASSWORD</button>
        </a>
        </div>
        <hr></hr>
        <div className={styles.google}>
        <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1">
        <button>
        <img src="google.png"></img>
        </button>
        </a>
        <a href="https://www.facebook.com">
        <button>
        <img src="facebook.png"></img>
        </button>
        </a>
        <a href="https://appleid.apple.com/sign-in">
        <button>
        <img src="apple.png"></img>
        </button>
        </a>
        </div>
        </div>
    

    );

}
