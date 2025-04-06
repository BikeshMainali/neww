


import styles from './page.module.css';
import HeroSection from '@components/homepage/herosection/herosection';
import Navbar from '@components/layouts/navbar/Navbar';
import Category from '@components/homepage/category/Category';
import Footer from '@components/layouts/footer/Footer';
import Topselling from '@components/homepage/topselling/Topselling';
import NewsletterSubscription from '@components/homepage/NewsletterSubscription/NewsletterSubscription';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <Navbar />
        <HeroSection />
      </div>
      
     
      <Category />
    <Topselling />
    <NewsletterSubscription />
      
      <Footer />
    </main>
  );
}