import React from 'react';
import { FiCopy } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './CodeBox.module.css';

interface IProps {
  code: string;
}

export const CodeBox: React.FC<IProps> = ({ code }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headLine}>
        <FiCopy className={styles.copyIcon} />
      </div>
      <div className={styles.content}>
        <SyntaxHighlighter
          language="json"
          style={qtcreatorLight}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
