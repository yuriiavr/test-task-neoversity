import Rating from '../../../assets/images/icons/Rating.svg?react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Rating
          key={i}
          className={i < rating ? styles.starFilled : styles.starEmpty}
          style={{ fill: i < rating ? '#FFC531' : 'none', stroke: i < rating ? '#FFC531' : '#ffc531' }}
        />
      );
    }
    return stars;
  };

  return (
    <div className={styles.reviewsSection}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.avatar}>
              <span className={styles.initials}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className={styles.name}>{review.reviewer_name}</p>
              <div className={styles.rating}>{renderRatingStars(review.reviewer_rating)}</div>
            </div>
          </div>
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;