import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import favoriteActive from "../images/favoriteActive.svg";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import favoriteblack from "../images/favoriteblack.svg"
import './card.scss'

export default function MediaCard({ id, image, name, price, unavaible }) {

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
    <Card sx={{ maxWidth: 345 }} className={ unavaible ? "unavaible" : "" }>
      <CardMedia
        component="img"
        height="200"
        image={ image }
        alt="Iphone"
      />
      <CardContent>
				{ unavaible ? 
				<p className="unavaible__text">Распродано</p>
				: "" }
        <Typography gutterBottom variant="h5" component="div" >
          {name}   
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum alias voluptatem similique laudantium fugiat harum nesciunt.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleCart}>{ isItemCart ? 'Забрать из корзины' : 'В корзину' }</Button>
				<img
						className="favoriteblack"
						onClick={handleFavorite}
						src={isItemFavorite ? favoriteActive : favoriteblack}
						alt="favoriteblack"
        	/>
      </CardActions>
    </Card>
  );
}
