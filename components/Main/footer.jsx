import styles from "./footer.module.css"

export default function(){
    return(
        <div className={styles.container}>
            <div className={styles.message}>
                <p>WE ARE EXCITED TO TEACH AND COLLABORATE WITH YOU</p>
            </div>
            <div className={styles.links}>
                <a href="https://github.com/Gilooooo/WEB"><img src="Github.png" /></a>        
                <a href="https://www.figma.com/file/jyjs8RHNT26QugKLYUZNrg/WEB-APP?node-id=0%3A1&t=MUTLJiAVwZwKA2N4-0"><img src="Figma.png" /></a>
                <a href="asdasdsaddsadas"><img src="fb.png"  /></a>
                <a href="asdasdsaddsadas"><img src="logolink.png" /></a>        
            </div>
        </div>
    )
}