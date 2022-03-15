import React from 'react';

export default function SelectedMovie({ data, goBack }) {
  function addToFavourite() {
    if (data.liked) data.liked = false;
    else data.liked = true;
  }

  console.log(data);
  return (
    <div className='grid grid--item'>
      <div className='grid--item__info'>
        <svg className='icon' onClick={goBack}>
          <use href='img/icons/icon-arrow-grey.svg#Line'></use>
        </svg>

        <h3 className='grid--item__timer'>86 min - {data.Year}</h3>

        <p className='grid--item__item'>{data.Title}</p>

        <div className='grid--item_labels'>
          <div className='rate'>
            <span className='span-y'>
              <svg className='icon'>
                <use href='img/logos/star-svgrepo-com.svg#Layer_1'></use>
              </svg>
            </span>
            <span className='span-z'>{data.imdbID}</span>
          </div>

          <div className='rate rate--y'>
            <span className='span-y'>
              <svg className='icon'>
                <use href='img/logos/star-svgrepo-com.svg#Layer_1'></use>
              </svg>
            </span>
            <span className='span-z'>96%</span>
          </div>

          <button className='btn' onClick={() => addToFavourite()}>
            <svg className={'icon' + (data.liked ? ' movieCard__wrap-liked' : '')}>
              <use href='img/icons/icon-heart-grey.svg#Rectangle-12'></use>
            </svg>
            {data.liked ? 'Dislike' : 'Add to Favourite'}
          </button>
        </div>

        <div className='details'>
          <h3 className='details-title'>Ploat</h3>

          <p className='details-exp'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat
            laudantium saepe voluptatum exercitationem fuga. Maiores sed enim voluptatibus
            in!
          </p>

          <div className='details-info'>
            <div>
              <h3 className='details-title'>Ploat</h3>

              <p className='details-exp'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                fugiat laudantium saepe voluptatum exercitationem fuga. Maiores sed enim
                voluptatibus in!
              </p>
            </div>

            <div>
              <h3 className='details-title'>Ploat</h3>

              <p className='details-exp'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                fugiat laudantium saepe voluptatum exercitationem fuga. Maiores sed enim
                voluptatibus in!
              </p>
            </div>

            <div>
              <h3 className='details-title'>Ploat</h3>

              <p className='details-exp'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                fugiat laudantium saepe voluptatum exercitationem fuga. Maiores sed enim
                voluptatibus in!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid--item__image'>
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
}
