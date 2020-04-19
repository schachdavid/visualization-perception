import React from 'react';
import { chartData } from '../../chartData';
import { CodeBox } from '../CodeBox/CodeBox';
import { ShareButtons } from '../ShareButtons/ShareButtons';
import styles from './CompletedPage.module.css';

interface IProps {
  data: any;
}

export const CompletedPage: React.FC<IProps> = ({ data }) => {
  const dataWithX = { ...data };

  dataWithX.xValueDomain =
    data[Object.keys(data)[0]] / chartData[0].expectedAnswer;
  dataWithX.xValueExpected =
    data[Object.keys(data)[1]] / chartData[1].expectedAnswer;
  dataWithX.xValueAffected =
    data[Object.keys(data)[2]] / chartData[2].expectedAnswer;

  const code = JSON.stringify(dataWithX, null, 4);

  return (
    <div className={styles.completedPage}>
      <h1 className={styles.headLine}>Vielen Dank für deine Hilfe!</h1>

      <div className={styles.answersContainer}>
        <div className={styles.answers}>Deine Antworten</div>
        <div className={styles.codeBox}>
          <CodeBox code={code}></CodeBox>
        </div>
      </div>

      <div className={styles.shareContainer}>
        <div className={styles.sharePlease}>
          Bitte schicke mir deine Antworten damit ich sie auswerten kann:
        </div>
        <ShareButtons code={code} />
      </div>
    </div>
  );
};
