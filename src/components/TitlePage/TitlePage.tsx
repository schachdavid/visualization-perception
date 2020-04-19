import React from 'react';
import styles from './TitlePage.module.css';

interface IProps {
  onStart: () => any;
}

export const TitlePage: React.FC<IProps> = ({ onStart }) => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.headLine}>Umfrage</h1>
        <div className={styles.time}>Zeitaufwand: 5min.</div>
        <div className={styles.assignment}>
          <p>Dir werden gleich verschiedene Balken-Diagramme gezeigt.</p>
          <p>Schau dir die Größeverhältnisse der Balken genau an.</p>
          <p> Danach musst du dazu eine Frage beantworten.</p>
        </div>
      </div>

      <input
        className={styles.nextButton}
        type="submit"
        value="Start"
        onClick={onStart}
      />
    </div>
  );
};
