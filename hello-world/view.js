import styles from './css/styles.css';

export default ({ name, staticPath }) =>
  `<div class=${styles.text}>
    Hello ${name}!
  </div>`;
