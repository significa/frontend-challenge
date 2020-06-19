//@
import React from 'react';
import classNames from 'classnames';
import styles from './SearchBar.css';
import magnifierIcon from '../../../icons/icon-magnifier-grey.svg';

type Props = {
  onChange: () => void,
  value: string,
  disabled?: boolean,
  className?: string
};

export default function SearchBar(props: Props) {
  const { onChange, value, disabled = false, className } = props;

  return (
    <div className={classNames(styles.Wrapper, { [styles.disabled]: disabled }, className)}>
      <img src={magnifierIcon} className={styles.Magnifier} />
      <input
        placeholder="Search movies..."
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={styles.Input}
      />
    </div>
  );
}
