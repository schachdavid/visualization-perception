import classNames from 'classnames';
import React, { useState } from 'react';
import { chartData } from '../../chartData';
import { CodeBox } from '../CodeBox/CodeBox';
import { CopyMessage } from '../CopyMessage/CopyMessage';
import { ShareButtons } from '../ShareButtons/ShareButtons';
import styles from './CompletedPage.module.css';

interface IProps {
  data: any;
}

export const CompletedPage: React.FC<IProps> = ({ data }) => {
  const [showCopied, setShowCopied] = useState(false);

  const dataWithX = { ...data };

  dataWithX.xValueAffected =
    (data[Object.keys(data)[1]] / chartData[1].expectedAnswer +
      data[Object.keys(data)[2]] / chartData[2].expectedAnswer) /
    2;

  dataWithX.xValueDomain =
    (data[Object.keys(data)[3]] / chartData[3].expectedAnswer +
      data[Object.keys(data)[4]] / chartData[4].expectedAnswer) /
    2;
  dataWithX.xValueExpected =
    (data[Object.keys(data)[5]] / chartData[5].expectedAnswer +
      data[Object.keys(data)[6]] / chartData[6].expectedAnswer) /
    2;

  const code = JSON.stringify(dataWithX, null, 4);

  return (
    <div className={styles.completedPage}>
      <CopyMessage
        className={classNames(
          styles.copyMessage,
          showCopied ? styles.blendInCopyMessage : ''
        )}
      ></CopyMessage>
      <h1 className={styles.headLine}>Vielen Dank für deine Hilfe!</h1>

      <div className={styles.answersContainer}>
        <div className={styles.answers}>Deine Antworten</div>
        <div className={styles.codeBox}>
          <CodeBox
            code={code}
            onCopyClick={() => {
              setShowCopied(true);
            }}
          ></CodeBox>
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
