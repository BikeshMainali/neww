"use client"

import './NewsletterSubscription.module.css'; // Assuming you have a CSS file for styles


import React, { useState } from 'react';
import styles from './NewsletterSubscription.module.css';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.partnerLogos}>
        <img src="/image 27.png" alt="Axon" className={styles.logo} />
        <img src="/image 28.png" alt="Jetstar" className={styles.logo} />
        <img src="/image 29.png" alt="Expedia" className={styles.logo} />
        <img src="/image 30.png" alt="Qantas" className={styles.logo} />
        <img src="/image 31.png" alt="Alitalia" className={styles.logo} />
      </div>
      
      <div className={styles.subscriptionBox}>
        <h2 className={styles.heading}>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
        
        <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
          <div className={styles.inputContainer}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className={styles.emailInput}
            />
          </div>
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
        
        {isSubmitted && (
          <div className={styles.successMessage}>
            Thank you for subscribing!
          </div>
        )}
      </div>

      <div className={`${styles.decorationCircle} ${styles.topRight}`}></div>
      <div className={`${styles.decorationCircle} ${styles.bottomLeft}`}></div>
      <div className={`${styles.decorationPlus} ${styles.topRight2}`}>+</div>
      <div className={`${styles.decorationPlus} ${styles.bottomRight}`}>+</div>
    </div>
  );
};

export default NewsletterSubscription;