import React from 'react';
import { FiGithub, FiLinkedin, FiMessageSquare } from 'react-icons/fi';
import styles from './ShareButtons.module.css';

interface IProps {}

export const ShareButtons: React.FC<IProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.socialMediaFooter}>
        <a
          href="mailto:schachdavid@web.de"
          className={styles.socialMediaLink}
          aria-label="Send an Email"
        >
          <FiMessageSquare className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-schach-668a22137/"
          className={styles.socialMediaLink}
          aria-label="View LinkedIn Profile"
        >
          <FiLinkedin className={styles.icon} />
        </a>
        <a
          href="https://github.com/schachdavid"
          className={styles.socialMediaLink}
          aria-label="View Github Profile"
        >
          <FiGithub className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
