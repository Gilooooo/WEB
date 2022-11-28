import styles from "./login.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

export default function LOGIN() {
    const [username,SetUsername] = useState('')
    const [password,SetPassword] = useState('')

    const Confirm = () => {

        Swal.fire({
            icon:"info",
            title: "Welcome User",
            text:"Credentials Correct",
            showConfirmButton: true
        }).then(function(){
            window.location = "http://localhost:3000/WEB";
        });
    }





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
        <input type="text" id="username" name="username" value={username} onChange={event => SetUsername(event.target.value)}/>
        <h3>PASSWORD</h3>
        <input type="text" id="password" name="password" value={password} onChange={event => SetPassword(event.target.value)}/>
        <button disabled={!username || !password} onClick={Confirm} >LOGIN</button>
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
