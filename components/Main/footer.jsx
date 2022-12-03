import styles from "./footer.module.css"

export default function(){
    return(
        <div className={styles.container}>
            <div className={styles.message}>
                <p className={styles.quote}>“By learning programming it is not only the knowledge that you gain, but it also improves your 
                                        problem soving and logical ability, so it help us to learn step by step and figure stuff out.”
                                        - EOS TEAM
                                        </p>
                <p>WE ARE EXCITED TO TEACH AND COLLABORATE WITH YOU</p>
            </div>
            <div className={styles.links}>
                <a href="https://github.com/Gilooooo/WEB"><img src="Github.png" /></a>        
                <a href="https://www.figma.com/file/jyjs8RHNT26QugKLYUZNrg/WEB-APP?node-id=0%3A1&t=MUTLJiAVwZwKA2N4-0"><img src="Figma.png" /></a>
                <a href=""><img src="fb.png"/></a>
                <a href="http://localhost:3000/WEB"><img src="logolink.png" /></a>        
            </div>
        </div>
    )
}