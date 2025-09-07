import { useState } from 'react';
import styles from './BookingForm.module.css';
import Button from '../../Shared/Button/Button';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    alert('Ваше бронювання успішно відправлено!');
    setFormData({
      name: '',
      email: '',
      bookingDate: '',
      comment: '',
    });
  };

  return (
    <div className={styles.bookingForm}>
      <h3>Book your companion now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange}
          placeholder="Booking date"
          required
        />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
        />
        <Button type="submit" style={{maxWidth: '166px', margin: '0 auto'}}>Send</Button>
      </form>
    </div>
  );
};

export default BookingForm;