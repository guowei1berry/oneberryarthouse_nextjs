import styles from './layout.module.css'

export default function Newlayout({ children }) {
    return <div className={styles.container}>{children}</div>;
  }
  