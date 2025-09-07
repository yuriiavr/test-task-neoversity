import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={styles.logo}>Travel<span className={styles.mark}>Trucks</span></NavLink>
        <div className={styles.navLinks}>
          <NavLink to="/" className={styles.navLink}>Home</NavLink>
          <NavLink to="/catalog" className={styles.navLink}>Catalog</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;