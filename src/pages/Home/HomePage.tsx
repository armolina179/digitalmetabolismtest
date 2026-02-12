import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/ui/Loading';
import styles from './HomePage.module.css';

type CloudinaryPlayerGlobal = {
  player: (
    elementId: string,
    options: {
      cloudName: string;
      publicId: string;
    }
  ) => unknown;
};

export function HomePage() {
  const navigate = useNavigate();
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isHueShifted, setIsHueShifted] = useState(false);
  const cloudName = 'drms0y8jz';
  const backgroundPublicId = 'pass7.5_ghdymj';
  const backgroundVideoSrc = `https://res.cloudinary.com/${cloudName}/video/upload/f_mp4,q_auto/${backgroundPublicId}.mp4`;
  const backgroundPosterSrc = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${backgroundPublicId}`;

  useEffect(() => {
    const playerElement = document.getElementById('player') as HTMLVideoElement | null;
    if (!playerElement) {
      setIsVideoLoading(false);
      return;
    }

    const stopLoading = () => setIsVideoLoading(false);
    const loadingTimeout = window.setTimeout(stopLoading, 6000);

    playerElement.addEventListener('loadeddata', stopLoading);
    playerElement.addEventListener('canplaythrough', stopLoading);
    playerElement.addEventListener('error', stopLoading);

    const cloudinary = (
      window as Window & { cloudinary?: CloudinaryPlayerGlobal }
    ).cloudinary;

    if (cloudinary?.player) {
      const player = cloudinary.player('player', {
        cloudName: 'drms0y8jz',
        publicId: 'pass7.5_ghdymj',
      });
      void player;
    } else {
      playerElement.src = backgroundVideoSrc;
    }

    const playAttempt = playerElement.play();
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => {
        // Ignore autoplay-block errors; controls are not shown for this background video.
      });
    }

    return () => {
      window.clearTimeout(loadingTimeout);
      playerElement.removeEventListener('loadeddata', stopLoading);
      playerElement.removeEventListener('canplaythrough', stopLoading);
      playerElement.removeEventListener('error', stopLoading);
    };
  }, [backgroundVideoSrc]);

  return (
    <div className={styles.page}>
      <div
        className={`${styles.background} ${isHueShifted ? styles.backgroundHueShift : ''}`}
        aria-hidden="true"
      >
        <video
          id="player"
          className={styles.backgroundVideo}
          poster={backgroundPosterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {isVideoLoading ? (
          <div className={styles.videoLoading}>
            <Loading label="Loading video..." className={styles.homeLoading} />
          </div>
        ) : null}
      </div>

      <section className={styles.topLeft}>
        <h1 className={styles.title}>
          <span className={styles.titleRow}>
            <span
              className={styles.hereText}
              onMouseEnter={() => setIsHueShifted(true)}
              onMouseLeave={() => setIsHueShifted(false)}
              onFocus={() => setIsHueShifted(true)}
              onBlur={() => setIsHueShifted(false)}
              tabIndex={0}>YOU</span>
            <span
              className={styles.hereText}
              onMouseEnter={() => setIsHueShifted(true)}
              onMouseLeave={() => setIsHueShifted(false)}
              onFocus={() => setIsHueShifted(true)}
              onBlur={() => setIsHueShifted(false)}
              tabIndex={0}
            >ARE</span>
            <span
              className={styles.hereText}
              onMouseEnter={() => setIsHueShifted(true)}
              onMouseLeave={() => setIsHueShifted(false)}
              onFocus={() => setIsHueShifted(true)}
              onBlur={() => setIsHueShifted(false)}
              tabIndex={0}
            >
              HERE:
            </span>
          </span>
          <span className={styles.subtitle}>
            LOCATING YOURSELF IN THE DIGITAL METABOLISM
          </span>
        </h1>
        <button
          type="button"
          onClick={() => navigate('/introduction')}
          className={styles.navButton}
              onMouseEnter={() => setIsHueShifted(true)}
              onMouseLeave={() => setIsHueShifted(false)}
              onFocus={() => setIsHueShifted(true)}
              onBlur={() => setIsHueShifted(false)}
              tabIndex={0}
        >
          &#62; TAKE TEST
        </button>
        <button
        type="button"
        onClick={() => navigate('/resources')}
        className={`${styles.navButton}`}
              onMouseEnter={() => setIsHueShifted(true)}
              onMouseLeave={() => setIsHueShifted(false)}
              onFocus={() => setIsHueShifted(true)}
              onBlur={() => setIsHueShifted(false)}
              tabIndex={0}
      >
        &#62; LEARN MORE
      </button>
      </section>



      <a
        href="http://arielmolina.work"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.portfolioLink}
      >
        Ariel Molina
      </a>
    </div>
  );
}
