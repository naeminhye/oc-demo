import React from 'react';
import styles from './css/styles.css';

let image = window.oc.image;

// window.oc.events.on('productChange', () => {
//   image = window.oc.product.image;
//   document.getElementById('product-image').src = image;
// });

const App = (props) => (
  <div className={styles.imageContainer}>
    <img className={styles.image} src={image} alt="" />
  </div>
);

export default App;
