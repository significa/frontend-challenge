//@
import React from 'react';
import classNames from 'classnames';
import styles from './SearchBar.css';
import magnifierIcon from '../../../icons/icon-magnifier-grey.svg';

type Props = {
  onChange: () => void,
  value: string,
  disabled?: boolean,
  placeholder?: string
};

export default function SearchBar(props: Props) {
  const { onChange, value, disabled = false, placeholder } = props;

  return (
    <div className={classNames(styles.Wrapper, { [styles.disabled]: disabled })}>
      <img src={magnifierIcon} className={styles.Magnifier} />
      <input disabled={disabled} value={value} onChange={onChange} placeholder={placeholder} className={styles.Input} />
    </div>
  );
}
