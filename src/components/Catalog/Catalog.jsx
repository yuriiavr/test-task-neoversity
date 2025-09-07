import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCampers } from '../../redux/campersSlice';
import Filters from './Filters/Filters';
import CamperCard from './CamperCard/CamperCard';
import Loader from '../Loader/Loader';
import styles from './Catalog.module.css';

const ITEMS_PER_PAGE = 4;

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error, filters } = useSelector(state => state.campers);
  const [visibleCampersCount, setVisibleCampersCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  const filteredCampers = useMemo(() => {
    let filtered = items;
    const { location, form, AC, kitchen, bathroom } = filters;

    if (location) {
      filtered = filtered.filter(camper =>
        camper.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (form) {
      filtered = filtered.filter(camper => camper.form === form);
    }
    if (AC) {
      filtered = filtered.filter(camper => camper.AC);
    }
    if (kitchen) {
      filtered = filtered.filter(camper => camper.kitchen);
    }
    if (bathroom) {
      filtered = filtered.filter(camper => camper.bathroom);
    }

    return filtered;
  }, [items, filters]);

  const handleLoadMore = () => {
    setVisibleCampersCount(prevCount => prevCount + ITEMS_PER_PAGE);
  };

  const displayedCampers = filteredCampers.slice(0, visibleCampersCount);

  const showLoadMoreBtn = displayedCampers.length < filteredCampers.length;

  return (
    <div className={styles.container}>
      <div className={styles.catalogPage}>
        <Filters />
        <div>
          <div className={styles.camperList}>
            {isLoading && <Loader />}
            {error && <p>Error: {error}</p>}
            {!isLoading && displayedCampers.length === 0 && (
              <p>No campers found with these filters.</p>
            )}
            {displayedCampers.length > 0 &&
              displayedCampers.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
              ))}
          </div>
          {showLoadMoreBtn && (
            <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;