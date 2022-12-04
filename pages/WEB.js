import Hero from "../components/Main/Hero";
import Introduction from "../components/Main/Introduction";
import Services from "../components/Main/Services";
import styles from "../components/Main/Nav.module.css";
import Subscription from "../components/Main/Subscription";
import Concern from "../components/Main/concern";
import Footer from "../components/Main/footer";
import  { useRef } from "react";



export default function WEB() {
  
 
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.scrollIntoView({behavior:'smooth'})
  }
  


  
  
  return (

    <div>
      <title>MAIN</title>
      <div className={styles.container}>
      <div className={styles.image}>
      <a href="http://localhost:3000/WEB">
        <button>
        <img src = "LOGO.png"></img>
        </button>
        </a>
        </div>
      <div className={styles.navbarActions}>
        <div className={styles.login}>
        <a href="http://localhost:3000/login">
        <button>Login</button>
        </a>
        </div>
        <a href="http://localhost:3000/reg"><button>Register</button></a>
         <button onClick={handleClick}>Contact</button>
      </div>
    </div>     
      <Hero/>
      <Introduction/>
      <Services/>
      <Subscription/>

      <div ref={ref}><Concern/> </div>
      <Footer/>
    </div>
  );
}
