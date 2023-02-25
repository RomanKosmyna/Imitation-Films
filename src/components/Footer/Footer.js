import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>
                <div className={styles.name}>
                   <h2>Imitation Films</h2>
                </div>
                <div className={styles.copyright}>
                    © 2023 Roman Kosmyna. All Rights Reserved.
                </div>
                <div className={styles.bottom}>
                    <p className={styles.terms}>Terms of Service</p>
                    <p className={styles.about}>About Us</p>
                    <p className={styles.contact}>Contact Us</p>
                </div>
            </div>
        </div>
    );
};

export {Footer};