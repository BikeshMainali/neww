import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.companyInfo}>
          <Link href="/" className={styles.footerLogo}>
            <h2>Jadoo.</h2>
          </Link>
          <p className={styles.tagline}>
            Book your trip in minute, get full<br />
            Control for much longer.
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <div className={styles.linksColumn}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/mobile">Mobile</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksColumn}>
            <h4>Contact</h4>
            <ul>
              <li><Link href="/help">Help/FAQ</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/affiliates">Affiliates</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksColumn}>
            <h4>More</h4>
            <ul>
              <li><Link href="/airlinefees">Airline fees</Link></li>
              <li><Link href="/airline">Airline</Link></li>
              <li><Link href="/tips">Low fare tips</Link></li>
            </ul>
          </div>
          
          <div className={styles.socialLinks}>
            <div className={styles.socialIcons}>
              <Link href="https://facebook.com" aria-label="Facebook">
                <span className={styles.socialIcon}>f</span>
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <span className={`${styles.socialIcon} ${styles.instagramIcon}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" fill="currentColor"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" fill="currentColor"/>
                    <circle cx="18.406" cy="5.594" r="1.44" fill="currentColor"/>
                  </svg>
                </span>
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <span className={styles.socialIcon}>
                  <svg width="16" height="13" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 2.309a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.36a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 0c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671.901a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.292a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.309z" fill="currentColor"/>
                  </svg>
                </span>
              </Link>
            </div>
            
            <h4>Discover our app</h4>
            <div className={styles.appStoreButtons}>
              <Link href="https://play.google.com/store" className={styles.storeButton}>
                <Image src="/p.png" alt="Get it on Google Play" width={100} height={30} />
              </Link>
              <Link href="https://apps.apple.com" className={styles.storeButton}>
                <Image src="/g.png" alt="Download on the App Store" width={100} height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
};

export default Footer;