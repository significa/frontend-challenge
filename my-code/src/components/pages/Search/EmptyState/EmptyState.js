import React from 'react';
import emptyStateIllustration from '../../../../assets/illustrations/illustration-empty-state.svg';
import styles from './EmptyState.css';

const EmptyState = () => {
  return (
    <div className={styles.Wrapper}>
      <img alt="Empty State Illustration" src={emptyStateIllustration} />
      <h3 className={styles.Title}>Don’t know what to search?</h3>
      <span className={styles.SubTitle}>Here’s an offer you can’t refuse</span>
    </div>
  );
};

export default EmptyState;
