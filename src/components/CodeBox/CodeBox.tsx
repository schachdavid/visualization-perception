import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './CodeBox.module.css';

interface IProps {
  code: string;
}

export const CodeBox: React.FC<IProps> = ({ code }) => {
  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.container}>
      <MdContentCopy className={styles.copyIcon} onClick={copyCode} />

      <div className={styles.content}>
        <SyntaxHighlighter language="json" style={darcula} >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
