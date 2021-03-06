import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function Completedchallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completedchallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}