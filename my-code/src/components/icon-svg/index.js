'use strict'
import React from 'react'
import url from './sprite.svg'

const IconSvg = ({ name, link }) => (
  <svg className={`icon icon-${name}`}>
    <use xlinkHref={`${url}#icon-${name}`} />
  </svg>
)

export default IconSvg
