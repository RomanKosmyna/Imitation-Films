import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.name}>
                <h3>Imitation Films</h3>
            </div>
            <div className={styles.copyright}>
                © 2023 Roman Kosmyna. All Rights Reserved.
            </div>
            <div className={styles.bottom}>
                <p>Terms of Service</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
        </div>
    );
};

export {Footer};