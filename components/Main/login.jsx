import styles from "./login.module.css";

export default function LOGIN() {
    return (
        
        <div className={styles.container}>
        <div className={styles.image}>
        <img src = "LOGO.png"></img>
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
        <button>CREATE ACCOUNT</button> 
        <button>FORGOT PASSWORD</button>
        </div>
        </div>
        
        

        

        

      

       






    );

}