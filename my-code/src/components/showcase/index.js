import React from 'react'
import IconSvg from '../icon-svg'
import './showcase.scss'

const Showcase = () => (
  <ul className='showcase'>
    <li className='showcase-item'>
      <a href='#'>
        <div className='showcase-item__mask' />
        <div className='showcase-item__favorite'>
          <button>
            <IconSvg name='icon-heart-white' />
          </button>
        </div>
        <figure className='showcase-item__image'>
          <img src='https://static.posters.cz/image/750/posters/sons-of-anarchy-jax-skull-i22296.jpg' alt='Sons Of Arnarchy' />
        </figure>
        <h2 className='showcase-item__title'>Sons Of Anarchy</h2>
        <small className='showcase-item__date'>2018</small>
      </a>
    </li>
    <li className='showcase-item'>
      <a href='#'>
        <div className='showcase-item__mask' />
        <div className='showcase-item__favorite'>
          <button>
            <IconSvg name='icon-heart-white' />
          </button>
        </div>
        <figure className='showcase-item__image'>
          <img src='https://kanto.legiaodosherois.com.br/fnoop/wp-content/uploads/2017/05/legiao_p63tJcfZOK2wCuPFmRgHU_LBibIqjVaWNe5D94oMSy.jpg' alt='Spider-Man' />
        </figure>
        <h2 className='showcase-item__title'>Spider-Man</h2>
        <small className='showcase-item__date'>2017</small>
      </a>
    </li>
    <li className='showcase-item'>
      <a href='#'>
        <div className='showcase-item__mask' />
        <div className='showcase-item__favorite'>
          <button>
            <IconSvg name='icon-heart-white' />
          </button>
        </div>
        <figure className='showcase-item__image'>
          <img src='http://www.bandodequadrados.com/img/imagem_noticia/a15820a3703c656b2330813e2eb228ba.jpg' alt='Ready Player One' />
        </figure>
        <h2 className='showcase-item__title'>Ready Player One</h2>
        <small className='showcase-item__date'>2018</small>
      </a>
    </li>
    <li className='showcase-item'>
      <a href='#'>
        <div className='showcase-item__mask' />
        <div className='showcase-item__favorite'>
          <button>
            <IconSvg name='icon-heart-white' />
          </button>
        </div>
        <figure className='showcase-item__image'>
          <img src='https://static.posters.cz/image/750/posters/sons-of-anarchy-jax-skull-i22296.jpg' alt='Sons Of Arnarchy' />
        </figure>
        <h2 className='showcase-item__title'>Sons Of Anarchy</h2>
        <small className='showcase-item__date'>2018</small>
      </a>
    </li>
    <li className='showcase-item'>
      <a href='#'>
        <div className='showcase-item__mask' />
        <div className='showcase-item__favorite'>
          <button>
            <IconSvg name='icon-heart-white' />
          </button>
        </div>
        <figure className='showcase-item__image'>
          <img src='https://kanto.legiaodosherois.com.br/fnoop/wp-content/uploads/2017/05/legiao_p63tJcfZOK2wCuPFmRgHU_LBibIqjVaWNe5D94oMSy.jpg' alt='Spider-Man' />
        </figure>
        <h2 className='showcase-item__title'>Spider-Man</h2>
        <small className='showcase-item__date'>2017</small>
      </a>
    </li>
    <li className='showcase-item'>
      <a href='#'>
        <div className='showcase-item__mask' />
        <div className='showcase-item__favorite'>
          <button>
            <IconSvg name='icon-heart-white' />
          </button>
        </div>
        <figure className='showcase-item__image'>
          <img src='http://www.bandodequadrados.com/img/imagem_noticia/a15820a3703c656b2330813e2eb228ba.jpg' alt='Ready Player One' />
        </figure>
        <h2 className='showcase-item__title'>Ready Player One</h2>
        <small className='showcase-item__date'>2018</small>
      </a>
    </li>
  </ul>
)

export default Showcase
