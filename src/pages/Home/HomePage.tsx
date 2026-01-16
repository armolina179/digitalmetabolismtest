import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import LetterGlitch from '../../components/ui/LetterGlitch';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100dvw',
          height: '100dvh',
          zIndex: 0,
          overflow: 'hidden',
          backgroundColor: '#000066',
        }}
      >
        <div style={{ width: '100%', height: '100%' }}>
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
      <style>
        {`
          @media (max-width: 768px) {
            .home-title {
              text-shadow: 0 0 1.25rem #000000 !important;
            }
            .home-subtitle {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
      <h1
        className="home-title"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '4rem',
          marginBottom: '0.4rem',
          fontWeight: 'normal',
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          color: '#ffffff',
          position: 'relative',
          zIndex: 1,
          textShadow: '0 0 3.125rem #000000',
          transform: 'scaleY(1.15)',
          lineHeight: '0.9',
        }}
      >
        You Are Here <br/>
      </h1>
      <h2 
        className="home-subtitle"
        style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: '1.75rem', 
          marginBottom: '1rem', 
          fontWeight: 'normal', 
          letterSpacing: '-0.05em', 
          textTransform: 'uppercase', 
          color: '#ffffff', 
          position: 'relative', 
          zIndex: 1, 
          textShadow: '0.1875rem 0.1875rem 6.25rem rgba(0, 0, 0, 0.5)' 
          }}
      >
        Locating Yourself in the Digital Metabolism
      </h2>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Button size="md" onClick={() => navigate('/introduction')}>
          &#62; Take Test
        </Button>
        <Button size="md" variant="outline" onClick={() => navigate('/resources')}>
          &#62; Learn More
        </Button>
      </div>
      <footer
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          zIndex: 1,
        }}
      >
        <a
          href="http://arielmolina.work"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            padding: '0.25rem 1rem',
            border: '0.0625rem solid #fff',
            borderRadius: '0.25rem',
            backgroundColor: '#000000',
            color: '#fff',
            textDecoration: 'none',
            display: 'inline-block',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000';
            e.currentTarget.style.color = '#fff';
          }}
        >
          Developed + Designed by Ariel Molina
        </a>
      </footer>
    </div>
  );
}
