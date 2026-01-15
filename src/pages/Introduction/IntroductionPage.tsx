import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function IntroductionPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem', textTransform: 'uppercase' }}>
          Disclaimer
        </h1>
        <p>
          This test is presented as a work of digital art.
        </p>
        <p>
          Your responses are not collected, stored, or submitted to any database.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          The experience does not produce a score or evaluation.
        </p>
        <p style={{ marginBottom: '2.5rem' }}>
          The purpose of the test is to reframe; to reconsider personal digital devices as components within a broader system of extraction, infrastructure, energy, and ecological consequence known as the digital–environmental metabolism.
        </p>
        <div style={{ marginTop: '3rem' }}>
          <Button size="md" onClick={() => navigate('/test')}>
            &#62; Take Test
          </Button>
        </div>
      </div>
    </div>
  );
}
