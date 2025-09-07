import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../../redux/favoritesSlice';
import { formatPrice } from '../../../utils/helpers';
import styles from './CamperCard.module.css';
import AC from '../../../assets/images/icons/AC.svg?react';
import Automatic from '../../../assets/images/icons/Automatic.svg?react';
import Bathroom from '../../../assets/images/icons/Bathroom.svg?react';
import Kitchen from '../../../assets/images/icons/Kitchen.svg?react';
import Petrol from '../../../assets/images/icons/Petrol.svg?react';
import TV from '../../../assets/images/icons/TV.svg?react';
import Like from '../../../assets/images/icons/Like.svg?react';
import Map from '../../../assets/images/icons/Map.svg?react';
import Rating from '../../../assets/images/icons/Rating.svg?react';
import CustomLink from '../../Shared/Link/CustomLink';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(fav => fav.id === camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper));
  };

  const imageUrl = camper.gallery && camper.gallery.length > 0
    ? camper.gallery[0].original
    : null;

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={camper.name} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.header}>
          <h3>{camper.name}</h3>
          <div className={styles.priceAndFavorite}>
            <p className={styles.price}>€{formatPrice(camper.price)}</p>
            <button onClick={handleToggleFavorite} className={styles.favoriteBtn}>
              <Like style={{fill: isFavorite ? '#E44848' : '#000'}} />
            </button>
          </div>
        </div>
        <div className={styles.ratingCont}>
          <p className={styles.rating}><Rating className={styles.ratingIcon} /> {camper.rating} ({camper.reviews.length} Reviews)</p>
          <p className={styles.location}><Map /> {camper.location}</p>
        </div>
        <p className={styles.description}>{camper.description}</p>
        <div className={styles.features}>
          {camper.transmission === 'automatic' && <span><Automatic className={styles.featuresIcon} />Automatic</span>}
          {camper.engine === 'petrol' && <span><Petrol className={styles.featuresIcon} />Petrol</span>}
          {camper.AC && <span><AC className={styles.featuresIcon} />AC</span>}
          {camper.kitchen && <span><Kitchen className={styles.featuresIcon} />Kitchen</span>}
          {camper.bathroom && <span><Bathroom className={styles.featuresIcon} />Bathroom</span>}
          {camper.TV && <span><TV className={styles.featuresIcon} />TV</span>}
        </div>
        <CustomLink children={'Show more'} to={`/catalog/${camper.id}`} />
      </div>
    </div>
  );
};

export default CamperCard;