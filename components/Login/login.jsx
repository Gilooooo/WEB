import styles from "./login.module.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function LOGIN({LogiN, error}) {
    const [details, setDetails] = useState({usernamE:""});
    const submitHandler = e => {
        e.preventDefault();
        LogiN(details);
    }

    const [password,SetPassword] = useState('')
   
    const Confirm = () => {

        Swal.fire({
            icon: "success",
            iconColor:"#31f731",
            title: "Welcome to  EOS!  " + details.usernamE ,
            confirmButtonText:"YOUR WELCOME EOS",
            confirmButtonColor: "green",
            background: "#1b2e1b",
            border:"neon green",
            color:"white",
            padding:"5px",
            width:400
           

        })

        
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
        <form onSubmit={submitHandler}>
            <div>
                <h3> EMAIL / USERNAME</h3>
                <input type="text" name="usernamE" onChange={e => setDetails({...details, usernamE: e.target.value})} value={details.usernamE}></input>
            </div>
            <div>
                <h3>PASSWORD</h3>
                <input type="password" id="password" name="password" value={password} onChange={event => SetPassword(event.target.value)}/>
            </div>
            <div>
                <button type="submit" value="LOGIN"  onClick={Confirm} disabled={!details.usernamE||!password} > LOGIN </button>
            </div>     
        </form>    
  
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
