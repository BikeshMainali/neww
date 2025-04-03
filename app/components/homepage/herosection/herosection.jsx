import styles from './herosection.module.css';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <span className={styles.tagline}>BEST DESTINATIONS AROUND THE WORLD</span>
        <h1 className={styles.heading}>
          Travel, enjoy<br />
          and live a new<br />
          and full life
        </h1>
        <p className={styles.description}>
          Built Wicket longer admire do barton vanity itself do in it. 
          Preferred to sportsmen it engrossed listening. Park gate 
          sell they west hard for the.
        </p>
        <div className={styles.ctaContainer}>
          <button className={styles.primaryButton}>Find out more</button>
          <button className={styles.demoButton}>
            <span className={styles.playIcon}>▶</span>
            Play Demo
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/newimage.png" 
            alt="Traveler with backpack and luggage" 
            width={500} 
            height={520} 
            className={styles.travelerImage}
          />
          <Image 
            src="/plane.png" 
            alt="Decorative airplane" 
            width={60} 
            height={60} 
            className={styles.planeDeco1}
          />
          <Image 
            src="/plane.png" 
            alt="Decorative airplane" 
            width={60} 
            height={60} 
            className={styles.planeDeco2}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;