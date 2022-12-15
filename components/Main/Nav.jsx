import styles from "./Nav.module.css";

export default function NAV() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
      <a href="https://eos-website.vercel.app/">
        <button>
        <img src = "LOGO.png"></img>
        </button>
        </a>
        </div>
      <div className={styles.navbarActions}>
        <div className={styles.login}>
        <a href="https://eos-website.vercel.app/login">
        <button>Login</button>
        </a>
        </div>
        <a href="https://eos-website.vercel.app/reg"><button>Register</button></a>
        <button>Contact</button>
      </div>
    </div>
  );
}
