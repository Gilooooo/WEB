import LOGIN from "./login";
import React, {useState} from "react";
import {useRef} from "react";
import styles from "../Main/Nav.module.css";
import styles1 from "../Main/Hero.module.css";
import styles2 from "../Main/Introduction.module.css";
import styles3 from "../Main/Services.module.css";
import styles4 from "../Main/Subscription.module.css";
import styles5 from "../Main/concern.module.css";
import styles6 from "../Main/footer.module.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function data(){
    const [user, setUser] = useState({usernamE: ""});
    const [error, setError] = useState("");
    const LogiN = details => {
        console.log(details);
        setUser({
            usernamE: details.usernamE
        });
    }
    const Logout =() =>{
        setUser({usernamE:""}); 
    }
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_sokdorp', 'template_1hnzbco', form.current, 'A8ARn0Ya1N4dfGySM')
        .then(
            (result) =>{
                console.log(result.text);
            },
            (error) =>{
                console.log(error.text);
            }
            
        );
        }
    const sent =() => {
        Swal.fire({
            icon:"success",
            iconColor:"#31f731",
            title: "SUCCESSFUL!",
            text:"Your Concern have been sent to EOS",
            showConfirmButton: true,
            confirmButtonColor: "green",
            background: "#1b2e1b",
             border:"neon green",
            color:"white",
            padding:"5px",
            width:300
    });
    }
    const ref = useRef(null);
    const handleClick = () => {
      ref.current.scrollIntoView({behavior:'smooth'})
    }
    
    return (
        <div>
            <div className="data">
                {(user.usernamE != "") ? (
                    <div className="welcome">
                        <div className={styles.container}>
                            <div div className={styles.image}>
                                <a>
                                    <button>
                                        <img src = "LOGO.png"></img>
                                    </button>
                                </a>
                            </div>
                            <div className={styles.navbarActions}>
                                <div className={styles.login}>
                                    <span>{user.usernamE}</span>
                                </div>
                                    <button onClick={Logout}>Logout</button>
                                    <button onClick={handleClick}>Contact</button>
                                </div>
                            </div>
                                <div className={styles1.container}>
                                    <div>
                                        <p>We are EOs Developers from Technological University of the Philippines- Cavite Campus , We are here to give you information and services about JavaScript, CSS and HTML with all you need.</p>
                                    </div>
                                    <div className={styles1.image}>
                                        <img src="LOGO2.png"/>
                                    </div>
                                </div>
                                        
                                        
                                <div className={styles2.container}> 
                                    <div className={styles2.content}>
                                        <p>What is EO?</p>
                                        <h1>Web Design</h1>
                                        <h5>EOs  provide  high quality of various designs made 
                                        on Figma  and ensuring ease of use and simplicity for your audience.
                                        </h5>
                                    </div>
                                    <div className={styles2.footer}>
                                    <h5>*We provide new experience </h5>
                                    <h5>*Always keep updated</h5>
                                    <h5>WE LOVE TO WORK WITH YOU </h5>
                                    </div>
                                    <div className={styles2.image}>
                                        <h1>TEAMS</h1>
                                        <img src="Profilepic1.png" />
                                        <img src="Profilepic2.png" />
                                        <img src="Profilepic3.png" />
                                        <img src="Profilepic4.png" />
                                    </div>
                        </div>
                        <div className={styles3.container}>
                        <div className={styles.message}>
                            <p>SERVICES</p>
                            <h2>Web Design </h2>
                            <h5>We promise to teach you to make a good quality design from Figma including user interface design, authoring, standardised code and proprietary software, user experience design and search engine optimization</h5>
                            <h2>CSS</h2>
                            <h5>In CSS,  we promise to teach you how to make unique and smooth transitions, animations, dynamic and interactive web design.</h5>
                        </div>
                        <div className={styles3.message2}>
                            <h2>JAVASCRIPT</h2>
                            <h5>In Javascript, we promise to teach you from the basic  to hard javascript which includes implementation of complex features on web pages such as development of mobile app, web, desktop software and server-side applications</h5>
                            <h2>HTML</h2>
                            <h5>We promise to teach you  and enhance your 
                                skills  on creating structure of the content on 
                                websites  that includes static web pages and web applications.</h5>
                        </div>
                        </div>
                        <div className={styles4.container}>
                            <div className={styles4.subscription0}>
                                <h1> JOIN NOW!! </h1>
                                <h3>1 MONTH FREE TRIAL</h3>                
                            </div>
                            <div className={styles4.subscription1}>
                                <p>FREE</p>                           
                                <a><strong>$0 / monthly</strong></a>
                                <h2>Have access in basic lessons, you have 1 FREE consultation for the code and also you have 10 HOURS for advance lessons.</h2>
                                <a type= "button" href="https://www.facebook.com/r.php" ><button>REGISTER NOW</button></a>
                            </div> 
                            <div className={styles4.subscription2}>
                                <p><strong>PREMIUM</strong></p>
                                <a><strong>$25 / monthly</strong></a>
                                <h2>Unlimited access  in  both basic and advance lessons also you have  10  consultation for  the code</h2>
                                <a type= "button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=BNRA86Q9XAM7A&lc=PH&item_name=EOS&no_note=1&no_shipping=1&src=1&a3=25%2e00&p3=1&t3=M&currency_code=USD&bn=PP%2dSubscriptionsBF%3abtn_subscribeCC_LG%2egif%3aNonHosted" ><button>SUBCRIBE NOW</button></a>  
                                <h6>*PAYPAL ONLY</h6> 
                            </div>
                        </div>
                        <div  ref={ref} className={styles5.container}>
                            <div >
                                <h5>IF YOU HAVE ANY CONCERNS, 
                                    JUST LEAVE A MESSAGE HERE</h5>
                            </div>
                            <form ref={form} onSubmit={sendEmail} >
                                <div className={styles5.Input}>
                                <input type={styles5.input} name="message"></input><br/>
                                <button onClick={sent} value="Send">SEND</button>
                            </div>
                            </form>      
                        </div>
                        <div className={styles6.container}>
                            <div className={styles6.message}>
                                <p className={styles6.quote}>“By learning programming it is not only the knowledge that you gain, but it also improves your 
                                    problem soving and logical ability, so it help us to learn step by step and figure stuff out.”
                                    - EOS TEAM</p>
                                <p>WE ARE EXCITED TO TEACH AND COLLABORATE WITH YOU</p>
                            </div>
                            <div className={styles6.links}>
                                <a href="https://github.com/Gilooooo/WEB"><img src="Github.png" /></a>        
                                <a href="https://www.figma.com/file/jyjs8RHNT26QugKLYUZNrg/WEB-APP?node-id=0%3A1&t=MUTLJiAVwZwKA2N4-0"><img src="Figma.png" /></a>
                                <a href=""><img src="fb.png"/></a>
                                <a href=""><img src="logolink.png" /></a>        
                            </div>
                        </div>
                    </div>
                    
                ):
                    <LOGIN LogiN={LogiN} error={error}/>
                } 
            </div>  
        </div>
    )
};
