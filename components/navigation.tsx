import styles from "../styles/navigation.module.css";
import Link from "next/link";

export default function Navigation () {
    return (
        <div className={styles.container + ` flex`}>
            <Link href={"/"} className={styles.option}> <img src="" alt="" /> </Link>
            <Link href={"/saved"} className={styles.option}> <img src="" alt="" /> </Link>
        </div>
    )
}