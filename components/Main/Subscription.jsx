import styles from "./Subscription.module.css";




export default function SUBSCRIPTION() {
    return (
      
      <div className={styles.container}>
        
        <div className={styles.subscription0}>
          <h1> JOIN NOW!! </h1>
          <h3>1 MONTH FREE TRIAL</h3>
          
          </div>
        <div className={styles.subscription1}>
        <p>FREE</p>
        
        <a><strong>$0 / monthly</strong></a>
        <h2>Have access in basic lessons, you have 1 FREE consultation for the code and also you have 10 HOURS for advance lessons.</h2>

        <a type= "button" href="http://localhost:3000/reg" ><button>REGISTER NOW</button></a>
          

         </div>
         

          
         <div className={styles.subscription2}>
         <p><strong>PREMIUM</strong></p>
         <a><strong>$25 / monthly</strong></a>
         <h2>Unlimited access  in  both basic and advance lessons also you have  10  consultation for  the code</h2>
         <a type= "button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=BNRA86Q9XAM7A&lc=PH&item_name=EOS&no_note=1&no_shipping=1&src=1&a3=25%2e00&p3=1&t3=M&currency_code=USD&bn=PP%2dSubscriptionsBF%3abtn_subscribeCC_LG%2egif%3aNonHosted" ><button>SUBCRIBE NOW</button></a>
          
         <h6>*PAYPAL ONLY</h6> 
        
         </div>   
          </div>
    );
  };
