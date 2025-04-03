import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>Jadoo</h1>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="#destinations" className={styles.navLink}>
          Destinations
        </Link>
        <Link href="#hotels" className={styles.navLink}>
          Hotels
        </Link>
        <Link href="#flights" className={styles.navLink}>
          Flights
        </Link>
        <Link href="#bookings" className={styles.navLink}>
          Bookings
        </Link>
        <Link href="/login" className={styles.navLink}>
          Login
        </Link>
        <Link href="/signup" className={styles.signUpButton}>
          Sign up
        </Link>
        <div className={styles.language}>
          <span>EN</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;