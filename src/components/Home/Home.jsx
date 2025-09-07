import styles from './Home.module.css';
import bgImage from '../../assets/images/hero-bg.jpg'; 
import Link from '../Shared/Link/CustomLink';

const Home = () => {

  return (
    <div className={styles.home} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.content}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link children={'View Now'} to={'/catalog'} />
      </div>
    </div>
  );
};

export default Home;