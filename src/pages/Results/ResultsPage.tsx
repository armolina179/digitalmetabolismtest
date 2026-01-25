import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import styles from './ResultsPage.module.css';

export function ResultsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Button className={styles.navButton} size="md" onClick={() => navigate('/')}>Home</Button>
          <Button className={styles.navButton} size="md" variant="outline" onClick={() => navigate('/resources')}>Learn More</Button>
        </div>
      </nav>

      <h1 className={styles.pageTitle}>
        Result:
        <br />
        <span className={styles.titleHighlight}>You Are Here</span>
      </h1>
      <p className={styles.body}>
        To be "here" is to exist alongside overlapping flows of material, energy, labor, and culture. Your digital life unfolds in relation to these systems, moving with them, shaping them, and being shaped in return. This moment marks a point of orientation. 
      </p>

      <div className={styles.videoWrap}>
        <video
          className={styles.video}
          src="https://res.cloudinary.com/drms0y8jz/video/upload/v1769238376/youarehere_ioqc1k.mp4"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <section className={styles.section}>
        <details className={styles.dropdown}>
          <summary className={styles.dropdownSummary}>A. Origins</summary>
          <p className={styles.body}>
            Materials drawn from the earth (metals, minerals, and chemical compounds) are extracted, refined, and transported through global supply chains. These origins remain present, even as devices feel seamless or immaterial. To use digital technology is to remain connected to these beginnings through energy, infrastructure, and labor.
          </p>
        </details>

        <details className={styles.dropdown}>
          <summary className={styles.dropdownSummary}>B. Data</summary>
          <p className={styles.body}>
            Information circulates through physical systems; servers, cables, data centers, and transfer stations, sustained by energy and constant maintenance. Every interaction leaves a trace within this flow, situating your digital actions within a continuous exchange rather than a distant abstraction.
          </p>
        </details>

        <details className={styles.dropdown}>
          <summary className={styles.dropdownSummary}>C. Afterlives</summary>
          <p className={styles.body}>
            Devices do not disappear when they are replaced or discarded. They continue on as electronic waste, often traveling elsewhere to be dismantled and recycled, or more often than not, left to accumulate. These afterlives link moments of use to extended material timelines that affect environments and human bodies.
          </p>
        </details>

        <details className={styles.dropdown}>
          <summary className={styles.dropdownSummary}>D. Media</summary>
          <p className={styles.body}>
            Images, platforms, videos, streams shape how attention moves and how culture forms. Media exists through technology, influencing both social relationships and the infrastructures that sustain your digital life. Your participation in media is your participation in this ongoing circulation.
          </p>
        </details>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitleLarge}>
          Reflecting on Your Digital Metabolism
        </h2>
        <p className={styles.body}>
          Inspired by principles of permaculture, your digital metabolism can be understood through relationships of care. Care for the earth, care for people, and care for shared resources. These ethics offer ways of noticing how your digital practices intersect with ecological and human systems.
        </p>

        <div className={styles.principlesVideoRow}>
          <div className={styles.principles}>
            <p className={styles.principle}>
              <strong>Earth Care:</strong> Attending to the material and energetic costs of digital systems.
            </p>
            <p className={styles.principle}>
              <strong>People Care:</strong> Recognizing the labor and bodies that sustain technological infrastructures.
            </p>
            <p className={styles.principle}>
              <strong>Fair Share:</strong> Considering balance, restraint, and reciprocity in digital culture.
            </p>
          </div>
          <div className={styles.videoWrap}>
            <video
              className={styles.video}
              src="https://res.cloudinary.com/drms0y8jz/video/upload/v1767085255/metabolisms_rwwqnz.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <p className={styles.closing}>
        "You are here" is not a conclusion. It is a reminder that your digital life is lived in the present tense, co-existent with the systems that sustain it, and are open to being reimagined.
      </p>
    </div>
  );
}
