import React from 'react';
import styles from './CompletedPage.module.css';

interface IProps {
  code: string;
}

export const CompletedPage: React.FC<IProps> = ({ code }) => {
  return (
    <div className={styles.completedPage}>
      <h1>Vielen Dank für deine Hilfe!</h1>
      <div>
        <div>
          Domäne: <span className={styles.xValue}>1.3</span>
        </div>
        <div>
          Erwartungskonformität: <span className={styles.xValue}>1.4</span>
        </div>
        <div>
          Betroffenheit: <span className={styles.xValue}>1.2</span>
        </div>
      </div>
      <div className={styles.answersContainer}>
        <div className={styles.answers}>Deine Antworten</div>
        <div className={styles.codeBox}>
          <CodeBox code={JSON.stringify(obj, null, 4)}></CodeBox>
        </div>
      </div>

      <div className={styles.shareContainer}>
        <div className={styles.sharePlease}>
          Teile deine Antworten mit mir damit ich sie auswerten kann:
        </div>
        <ShareButtons></ShareButtons>
      </div>
    </div>
  );
};
