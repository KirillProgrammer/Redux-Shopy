import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCart, removeCart } from '../../redux/cartReducer';
import { setFavorite, removeFavorite } from '../../redux/favoriteReducer';
import './card.scss'

function Card({ id, image, name, price, unavaible }) {

  const dispatch = useDispatch();

  const itemsCart = useSelector((state) => state.cart.itemsCart);
  const isItemCart = itemsCart.some((itemsCart) => itemsCart.id === id);

  const itemsFavorite = useSelector((state) => state.favorite.itemsFavorite);
  const isItemFavorite = itemsFavorite.some((itemsFavorite) => itemsFavorite.id === id);

  const handleFavorite = () => {
    if (isItemFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(setFavorite({ id, name, image, price }));
    }
  };

  const handleCart = () => {
    if (isItemCart) {
      dispatch(removeCart({ id }));
    } else {
      dispatch(setCart({ id, name, image, price, unavaible }));
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
        <CartBtn onClick={handleCart}>{isItemCart ? 'Забрати з корзини' : 'В корзину'}</CartBtn>
        <p>{price} грн.</p>
      </div>
      {unavaible && <div className="product__panel-unavaible">{unavaible}</div>}
    </div>
  )
}

export default Card