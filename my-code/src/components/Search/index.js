import React from 'react';
import { Input } from './styles';

export default function Search(props) {
  return (
      <Input type="text" placeholder="Search movies..." isDisabled={props.isDisabled} />
  );
}
