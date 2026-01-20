import { useState, useEffect } from 'react';
import { getTechnosphereStages, type Stage } from '../lib/technosphereCollage';
import styles from './TechnosphereScroller.module.css';

export function TechnosphereScroller() {
  const stages = getTechnosphereStages();
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log('TechnosphereScroller - stages:', stages);
    if (stages.length === 0) {
      console.error('No stages found!');
    } else {
      stages.forEach((stage) => {
        console.log(`Stage:`, {
          id: stage.id,
          title: stage.title,
          roman: stage.roman,
          image: stage.image,
          hasImage: !!stage.image,
        });
      });
    }
  }, [stages]);

  if (stages.length === 0) {
    return (
      <section className={styles.wrapper}>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>No stages found. Please check the markdown file.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        {stages.map((stage, index) => (
          <StageCard
            key={stage.id || `stage-${index}`}
            stage={stage}
            index={index}
            isActive={activeStageIndex === index}
            onActivate={() => setActiveStageIndex(index)}
            onDeactivate={() => setActiveStageIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}

interface StageCardProps {
  stage: Stage;
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

function StageCard({ stage, index, isActive, onActivate, onDeactivate }: StageCardProps) {
  const imageAbove = stage.position === 'above';
  const captionId = `caption-${stage.id}`;

  // Debug: log stage data
  if (index === 0) {
    console.log('First stage data:', {
      id: stage.id,
      title: stage.title,
      roman: stage.roman,
      position: stage.position,
      image: stage.image,
      imageType: typeof stage.image,
      hasImage: !!stage.image,
    });
  }

  return (
    <div
      className={`${styles.stage}`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      tabIndex={0}
      role="article"
      aria-label={`${stage.roman}. ${stage.title}`}
    >
      <div className={styles.grid}>
        {/* Caption area - shown in top position when image is below, bottom position when image is above */}
        <div
          className={`${styles.captionArea} ${imageAbove ? styles.captionBottom : styles.captionTop} ${isActive ? styles.active : ''}`}
          id={captionId}
          aria-live="polite"
          style={{
            pointerEvents: isActive ? 'auto' : 'none',
          }}
        >
          <p className={styles.captionText}>{stage.caption}</p>
        </div>

        {/* Image area top - shown when position is above */}
        <div
          className={`${styles.imageArea} ${styles.imageTop}`}
          style={{
            display: imageAbove ? 'flex' : 'none',
          }}
        >
          <img
            src={stage.image}
            alt={stage.alt}
            className={styles.image}
            loading="lazy"
          />
        </div>

        {/* Baseline - always visible */}
        <div className={styles.baseline}>
          <div className={styles.label} aria-describedby={captionId}>
            <span className={styles.roman}>{stage.roman}.</span>
            <span className={styles.title}>{stage.title}</span>
          </div>
        </div>

        {/* Image area bottom - shown when position is below */}
        <div
          className={`${styles.imageArea} ${styles.imageBottom}`}
          style={{
            display: !imageAbove ? 'flex' : 'none',
          }}
        >
          <img
            src={stage.image}
            alt={stage.alt}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
