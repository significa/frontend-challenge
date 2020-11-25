import React from 'react';
import styles from './MovieCardSkeleton.css';

const MovieCardSkeleton = () => {
  return (
    <div className={styles.Wrapper}>
      <div>
        <div className={styles.SkeletonImg} />
      </div>
      <div className={styles.SkeletonInfo}>
        <p className={styles.SkeletonTitle} />
        <p className={styles.SkeletonSubTitle} />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
