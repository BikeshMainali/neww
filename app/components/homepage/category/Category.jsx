import Image from 'next/image';
import styles from './category.module.css';

const Category = () => {
  const categories = [
    {
      icon: '/cal.png',
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.'
    },
    {
      icon: '/be.png',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.'
    },
    {
      icon: '/loc.png',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Prefered to men it engrossed listening.'
    },
    {
      icon: '/cuu.png',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers.'
    }
  ];

  return (
    <section className={styles.categorySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subheading}>CATEGORY</span>
          <h2 className={styles.heading}>We Offer Best Services</h2>
        </div>
        
        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.iconWrapper}>
                <Image 
                  src={category.icon} 
                  alt={category.title}
                  width={70} 
                  height={70}
                />
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;