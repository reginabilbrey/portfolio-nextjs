
import Link from "next/link";
import styles from "./navigation.module.css"

const Navigation = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navMenu}>
                {/* <!-- Navigation List (Left) --> */}
                <ul>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/process">Process</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>                    



    );
}

export default Navigation;