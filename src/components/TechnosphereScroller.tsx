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
      subtitle: stage.subtitle,
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
        {/* Caption area top - shown when image is below */}
        <div
          className={`${styles.captionArea} ${styles.captionTop} ${isActive && !imageAbove ? styles.active : ''}`}
          id={captionId}
          aria-live="polite"
          style={{
            pointerEvents: isActive && !imageAbove ? 'auto' : 'none',
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
          {stage.subtitle && (
            <div className={styles.subtitle}>{stage.subtitle}</div>
          )}
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

        {/* Caption area bottom - shown when image is above */}
        <div
          className={`${styles.captionArea} ${styles.captionBottom} ${isActive && imageAbove ? styles.active : ''}`}
          id={imageAbove ? captionId : undefined}
          aria-live="polite"
          style={{
            pointerEvents: isActive && imageAbove ? 'auto' : 'none',
          }}
        >
          <p className={styles.captionText}>{stage.caption}</p>
        </div>
      </div>
    </div>
  );
}
