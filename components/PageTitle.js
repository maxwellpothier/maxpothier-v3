import styles from "./pageTitle.module.scss";

const PageTitle = ({title, subtitle}) => {
    return (
        <div className={styles.pageHeaderContainer}>
            <span className={styles.pageHeaderTitle}>{title}</span>
            <span className={styles.pageHeaderSubtitle}>{subtitle}</span>
        </div>
    );
};

export default PageTitle;