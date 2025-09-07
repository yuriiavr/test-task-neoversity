import styles from './CustomLink.module.css'
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children, ...rest }) => {
    return(
        <Link to={to} className={styles.btn} {...rest}>{children}</Link>
    )
}

export default CustomLink