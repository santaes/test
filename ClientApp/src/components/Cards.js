import React from 'react';
import Card from './Card';
import { data } from '../data/data';
import './styles.css';

const Cards = () => {
  return (
    <div className='cards_wrapper'>
      {data.map((item, index) => (
        <div key={index}>
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
