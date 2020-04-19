import React from 'react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import styles from './ShareButtons.module.css';

interface IProps {
  code: string;
}

export const ShareButtons: React.FC<IProps> = ({ code }) => {
  return (
    <div className={styles.container}>
      <div className={styles.socialMediaFooter}>
        <a
          href={`mailto:schachdavid@web.de?subject=Visualization Antworten&body=Hi David,
          hier die Antworten der Umfrage:
          ${code}`}
          className={styles.socialMediaLink}
          aria-label="Send via Email"
        >
          <FiMail className={styles.icon} />
        </a>
        <a
          href={`https://telegram.me/share/url?url=${code}`}
          className={styles.socialMediaLink}
          aria-label="Send via Telegram"
        >
          <FaTelegramPlane className={styles.icon} />
        </a>
        <a
          href={`https://wa.me/?text=${code}`}
          className={styles.socialMediaLink}
          aria-label="Send via Whatsapp"
        >
          <FaWhatsapp className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
