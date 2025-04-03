import Image from 'next/image';
import styles from './topselling.module.css';

const Topselling = () => {
  const destinations = [
    {
      id: 1,
      image: '/rome.png',
  
    },
    {
      id: 2,
      image: '/london.png',
   
    },
    {
      id: 3,
      image: '/f.png',
      
    }
  ];

  return (
    <section className={styles.topsellingSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subheading}>Top Selling</span>
          <h2 className={styles.heading}>Top Destinations</h2>
        </div>
        
        <div className={styles.destinationsGrid}>
          {destinations.map((destination) => (
            <div key={destination.id} className={styles.destinationCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={destination.image}
                  alt={destination.title}
                  width={315}
                  height={327}
                  className={styles.destinationImage}
                />
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topselling;