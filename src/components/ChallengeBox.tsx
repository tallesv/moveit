import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallange, completeChallange } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallange();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallange();
    resetCountdown();
  }

  return (
    <div className={styles.ChallengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.ChallengeFailedButton}
              onClick={handleChallengeFailed}
            >
              falhei
            </button>
            <button
              type="button"
              className={styles.challengesucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>  
      ) : (
        <div className={styles.ChallengeNotActive}>
          <strong>Finzalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg"  alt="level-up"/>
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}