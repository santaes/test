import React from 'react';
import './styles.css';

const Card = ({ title, image, description, price }) => {
  return (
    <div className='card_wrapper'>
      <h3>{title}</h3>
      <img className='card_img' src={image} alt={title} />
      <p className='description'>{description}</p>
      <p className='price'>Price: {price}</p>
    </div>
  );
};

export default Card;
