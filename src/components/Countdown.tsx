import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import { FiX } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { time, minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)

  const fullTime = 0.2 * 60;

  const completeChallengeBar = Math.round((fullTime - time) * 100) / fullTime;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button disabled type="button" className={`${styles.countdownButton}`} >
          <div>
            Ciclo encerrado
            <HiCheckCircle className={`${styles.countdownButtonIcon} ${styles.countdownButtonIconComplete}`}/>
          </div>

          <div style={{ width: '100%' }} />
        </button>
      ): (
        <>
          { isActive ? ( 
            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={() => resetCountdown()}>
              <div>
                Abandonar ciclo
                <FiX className={styles.countdownButtonIcon} />
              </div>
              
              <div style={{ width: `${completeChallengeBar}%` }} />
            </button>
          ) : (
            <button type="button" className={styles.countdownButton} onClick={() => startCountdown()}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}