import styles from './css/styles.css';

export default ({ name, staticPath }) =>
  `<div class=${styles.awesome}>
    <img src="${staticPath}img/logo.png" />
    Hello ${name}!
  </div>`;
