import styles from '../../css/landing/textflip.module.css'

export default function TextFlip() {
  return (
    <div className={styles.container}>
        <div className={styles.rotate}>
            <span className={styles.word}>ELIXIR</span>
            <span className={styles.word}>ELIXIR</span>
            <span className={styles.word}>ELIXIR</span>
            <span className={styles.word}>ELIXIR</span>
            <span className={styles.word}>ELIXIR</span>
        </div>
    </div>
  )
}
