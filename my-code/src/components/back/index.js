import React from 'react'
import { Link } from 'react-router-dom'
import IconSvg from '../icon-svg'
import './back.scss'

const Back = ({ handleBack }) => (
  <section className='back'>
    <Link to='/' onClick={handleBack}>
      <IconSvg name='icon-arrow-grey' />
    </Link>
  </section>
)

export default Back
