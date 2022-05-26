import styles from "./pageTitle.module.scss";

const PageTitle = ({title, subtitle}) => {
    return (
        <div className={styles.pageTitleContainer}>
            <span className={styles.pageTitleTitle}>{title}</span>
            <span className={styles.pageTitleSubtitle}>{subtitle}</span>
        </div>
    );
};

export default PageTitle;