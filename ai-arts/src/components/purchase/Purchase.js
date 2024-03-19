import React from 'react';

import styles from './Purchase.module.css';

const Purchase = () => {
  return (
    <section className={styles.purchase_section}>
      <h1>No Purchases</h1>
      <p>You have not purchased any photos yet.</p>
    </section>
  )
}

export default Purchase
