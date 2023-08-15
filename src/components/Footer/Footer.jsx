import styles from "./Footer.module.scss"
export default function Footer(){
    return (
        <div className={`${styles.footerContainer} container-fluid`}>
            <p className={styles.footer}>© 2023 Developed by OttoSuhett </p>
        </div>
    )
}