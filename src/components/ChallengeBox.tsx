import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';


import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }


    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src="icons/level.png" alt="Desafio" height="70" width="70" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengefailedButton}
                            onClick={handChallengeFailed}
                            >Falhei
                            </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handChallengeSucceeded}
                            >Completei
                            </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um cilco para receber um desafio</strong>
                    <p>
                        <img src="icons/level.png" alt="Level Up" height="60" width="60" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
            
        </div>
    );
}