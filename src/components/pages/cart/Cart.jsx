import React from 'react';
import Card from '../../card/Card';
import { useSelector } from 'react-redux';
import "./cart.scss";

function Cart() {

  const items = useSelector((state) => state.itemsCart);

  return (
    <div className='cart'>
      {items.map((card) => (
            <div key={card.id} className="col-xl-4 col-md-6">
              <Card
                name={card.name}
                image={card.image}
                price={card.price}
                unavaible={card.unavaible}
                id={card.id}
              />
            </div>
          ))}
    </div>
  )
}

export default Cart