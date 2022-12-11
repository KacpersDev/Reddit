import styles from '../styles/Home.module.css';

import Trending0 from '../images/trending0.webp';
import Trending1 from '../images/trending1.webp';
import Trending2 from '../images/trending2.webp';
import Trending3 from '../images/trending3.webp';

export default function trending(){
    return(
        <div className={styles.trending_container}>
            <div className={styles.trending_topics}>
                <div className={styles.trending_topic} id={styles.trending_topic_0}>
                    <img className={styles.trending_image} src={Trending0.src} alt={'trending image'} id={styles.trending}/>
                    <p className={styles.trending_title}>Base Editing Treatment</p>
                    <p className={styles.trending_description}>Base editing: Revolutionary therapy clears girl's incurable cancer</p>
                </div>
                <div className={styles.trending_topic} id={styles.trending_topic_1}>
                    <img className={styles.trending_image} src={Trending1.src} alt={'trending image'} id={styles.trending1}/>
                    <p className={styles.trending_title}>Arizona Border Wall</p>
                    <p className={styles.trending_description}>Arizona Gov. Ducey stacks containers on border at term's end</p>
                </div>
                <div className={styles.trending_topic} id={styles.trending_topic_2}>
                    <img className={styles.trending_image} src={Trending2.src} alt={'trending image'} id={styles.trending2}/>
                    <p className={styles.trending_title}>House Election Recount</p>
                    <p className={styles.trending_description}>Recount flips Mass. House election to Democrat by 1 vote</p>
                </div>
                <div className={styles.trending_topic} id={styles.trending_topic_3}>
                    <img className={styles.trending_image} src={Trending3.src} alt={'trending image'} id={styles.trending3}/>
                    <p className={styles.trending_title}>Xi Jinping</p>
                    <p className={styles.trending_description}>Xi Jinping says China supports Palestine with 1967 borders</p>
                </div>
            </div>
        </div>
    );
}