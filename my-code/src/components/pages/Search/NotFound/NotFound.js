import React from 'react';
import illustrationNotFound from '../../../../assets/illustrations/illustration-movie-not-found.svg';
import styles from './NotFound.css';

const NotFound = () => {
  return (
    <div className={styles.Wrapper}>
      <img
        className={styles.Illustration}
        alt="Movie not found Illustration"
        src={illustrationNotFound}
      />
      <h3 className={styles.Title}>Movie Not Found :(</h3>
      <span className={styles.SubTitle}>Try to search for another movie!</span>
    </div>
  );
};

export default NotFound;
