'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>Jadoo</h1>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
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
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// This code defines a responsive navigation bar using React and CSS modules.
// It includes a logo, navigation links, and a hamburger menu for mobile view.
// The `useState` hook is used to manage the open/closed state of the menu.
// The `toggleMenu` function toggles the menu's visibility.
// The navigation links include destinations, hotels, flights, bookings, and login/signup options.
// The language selector is also included with a simple dropdown icon.
// The CSS module styles are imported to style the components.
// The `Link` component from Next.js is used for client-side navigation.  