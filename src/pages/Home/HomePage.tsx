import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import LetterGlitch from '../../components/ui/LetterGlitch';
import styles from './HomePage.module.css';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <div className={styles.backgroundInner}>
          <LetterGlitch
            glitchColors={['#00056E', '#0007A5', '#00068A']}
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={false}
            smooth={true}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
          />
        </div>
      </div>

      <div className={styles.hero}>
        <h1 className={styles.title}>You</h1>
        <h1 className={styles.titleCenter}>Are</h1>
        <div className={styles.right}>
          <h1 className={styles.titleRight}>Here:</h1>
          <h2 className={styles.subtitle}>
            Locating Yourself in <br /> the Digital Metabolism
          </h2>
          <div className={styles.buttonRow}>
            <Button
              size="sm"
              variant="outline"
              onClick={() => navigate('/resources')}
              className={styles.navButton}
              style={{ paddingLeft: '1rem', paddingRight: '1rem', width: '10rem', boxSizing: 'border-box' }}
            >
              &#62; LEARN MORE
            </Button>
            <Button
              size="sm"
              onClick={() => navigate('/introduction')}
              className={styles.navButton}
              style={{ paddingLeft: '1rem', paddingRight: '1rem', width: '10rem', boxSizing: 'border-box' }}
            >
              &#62; TAKE TEST
            </Button>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="http://arielmolina.work"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Developed + Designed by Ariel Molina
        </a>
      </footer>
    </div>
  );
}
