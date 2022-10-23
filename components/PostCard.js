import Link from "next/link";
import Image from "next/image";

import styles from "./postCard.module.scss";

const PostCard = ({url, title, artist}) => {
	return (
        <Link href={"/"} passHref>
            <div className={styles.postCardContainer}>
                <div className={styles.postCardImage}>
                    <Image
                        src={url}
                        alt={title}
                        width={200}
                        height={200}
                    />
                </div>
                <span className={styles.postCardTitle}>{title}</span>
                <span className={styles.postCardArtist}>{artist}</span>
                {/* <button className={styles.albumCardButton}>Read More</button> */}
            </div>
        </Link>
	);
};

export default PostCard;