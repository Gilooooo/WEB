import styles from "./reg.module.css";
import Swal from "sweetalert2";
import { useState } from "react";

export default function REG (){

    const [username,SetUsername] = useState('')
    const [email,SetEmail] = useState('')
    const [pass,SetPass] = useState('')
    const [cpass,SetCpass] = useState('')
    const Clickme = () => {

        Swal.fire({
            icon:"success",
            iconColor:"#31f731",
            title: "CONGRATULATIONS!",
            text:"Your Account is successfully registered to EOS",
            showConfirmButton: true,
            confirmButtonText: "PROCEED",
            confirmButtonColor: "green",
            background: "#1b2e1b",
            border:"neon green",
            color:"white",
            padding:"5px",
            width:375
        }).then(function(){
           window.location = "/login"
        });
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.image}>
            <a type="button" href="https://eos-website.vercel.app"><img src="LOGO.png" /></a>
            </div>
            <div className={styles.LEFT}>
                <h1>SIGN UP</h1>
            </div>

            <div className={styles.RIGHT}>
                <h6>Username</h6>
                <input type="text" id="username" name="username" value={username} onChange={event => SetUsername(event.target.value)}/>
                <h6>Email</h6>
                <input type="text" id="email" name="email" value={email} onChange={event => SetEmail(event.target.value)}/>
                <h6>Password</h6>
                <input type="password" id="pass" name="pass" value={pass} onChange={event => SetPass(event.target.value)}/>
                <h6>Confirm Password</h6>
                <input type="password" id="cpass" name="cpass" value={cpass} onChange={event => SetCpass(event.target.value)}/>
                <br></br>
                <button id="btn" disabled={!username || !email || !pass || !cpass} onClick={Clickme}>SIGN UP</button>
            </div>
        </div>
        
    )
}
