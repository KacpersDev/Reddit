import styles from '../styles/Home.module.css'
import redditLogo from '../images/logo.png';

export default function Header(){
    return(
        <div>
            <div className={styles.header_container}>
                <img className={styles.header_logo} src={redditLogo.src} alt={'reddit logo'} />
                <p className={styles.header_title}>Reddit<span id={styles.minimal}>Minimal</span></p>
            </div>
            <div className={styles.header_search}>
                <input className={styles.search_bar} type="text" placeholder='Search Reddit' />
            </div>
            <div className={styles.header_button_container}>
                <div className={styles.header_button_1}>
                    <button className={styles.header_button} id={styles.log_in}>Log In</button>    
                </div>    
                <div className={styles.header_button_2}>
                    <button className={styles.header_button} id={styles.app}>Get App</button>    
                </div>    
            </div>       
            <p className={styles.trending_title_container}>Trending today</p>
        </div>
    );    
}