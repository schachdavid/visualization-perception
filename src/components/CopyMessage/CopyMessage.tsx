import classNames from 'classnames';
import React from 'react';
import styles from './CopyMessage.module.css';

interface IProps {
  className?: string;
}

export const CopyMessage: React.FC<IProps> = ({ className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      Daten kopiert!
    </div>
  );
};
