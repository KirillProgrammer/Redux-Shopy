import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import favoriteActive from "../images/favoriteActive.svg";
import favoriteblack from "../images/favoriteblack.svg"
import './card.scss';

function Card({ id, image, name, price, unavaible }) {

  const dispatch = useDispatch();

  const itemsCart = useSelector((state) => state.itemsCart);
  const isItemCart = itemsCart.some((itemsCart) => itemsCart.id === id);

  const itemsFavorite = useSelector((state) => state.itemsFavorite);
  const isItemFavorite = itemsFavorite.some((itemsFavorite) => itemsFavorite.id === id);

  const handleFavorite = () => {
    if (isItemFavorite) {
      dispatch({ type: 'removeFromFavorite', payload: id });
    } else {
      dispatch( {type: 'addToFavorite', payload: { id, name, image, price } });
    }
  };

  const handleCart = () => {
    if (isItemCart) {
      dispatch({ type: 'removeFromCart', payload: id });
    } else {
      dispatch( {type: 'addToCart', payload: { id, name, image, price } });
    }
  };


  return (
    <div className={unavaible ? 'card unavaible' : 'card'}>
      <div className="card__title">
        <h2>{name}</h2>
        <img
          className="favoriteblack"
          onClick={handleFavorite}
          src={isItemFavorite ? favoriteActive : favoriteblack}
          alt="favoriteblack"
        />
      </div>
      <img className="card__image" src={image} alt="images" />
      <div className="card__price">
        <button onClick={handleCart}>{isItemCart ? 'Забрать из корзины' : 'В корзину'}</button>
        <p>{price} грн.</p>
      </div>
      {unavaible && <div className="product__panel-unavaible">{unavaible}</div>}
    </div>
  )
}

export default Card