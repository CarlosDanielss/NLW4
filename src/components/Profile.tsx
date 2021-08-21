import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/CarlosDanielss.png" alt="Carlos Daniel" />
            <div>
                <strong>Carlos Daniel</strong>
                <p>
                    <img src="icons/level.png" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}