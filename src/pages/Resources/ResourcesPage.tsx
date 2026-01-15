import { Button } from "../../components/ui/Button";
import { useNavigate } from 'react-router-dom';

export function ResourcesPage() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <blockquote
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          fontStyle: 'italic',
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '2rem 1rem',
          borderLeft: 'none',
        }}
      >
        We must begin to tell new stories that illustrate our Anthropocenic togetherness. In our blind adoption of techno-reproduction as the apex of human progeess, we have sentenced ourselves to lives lived with those technologies and the implications of their geophysical wastes.<br></br> - Amanda Starling Gould
      </blockquote>

      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          What Is Digital Metabolism?
        </h2>
        <div style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Digital metabolism, or{' '}
            <a
              href="https://hdl.handle.net/10161/14457"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#000',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
                textUnderlineOffset: '2px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecorationThickness = '2px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecorationThickness = '1px';
              }}
            >
              digital–environmental metabolism
            </a>
            , describes how digital technologies (phones, computers, networked devices, and the internet) are embedded within physical, ecological, and human systems. Rather than existing apart from the material world, digital systems function through exchanges of energy and resources that resemble metabolic processes of living organisms. As we continue to expand the{' '}
            <a
              href="https://anthropocene.univie.ac.at/resources/technosphere/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#000',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
                textUnderlineOffset: '2px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecorationThickness = '2px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecorationThickness = '1px';
              }}
            >
              technosphere
            </a>
            , grounding it within its physical and ecological realities becomes increasingly urgent.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Every digital action (messaging, streaming, shopping, etc.) is supported by vast physical infrastructures: data centers, servers, cables, and devices that consume energy and generate waste. These systems are fed by resources extracted from the earth; metals mined from the ground, chemicals used in processing, and electricity required to sustain constant operation. And they produce waste in return; electronic waste, pollution, and carbon emissions. Digital systems, like bodies, require continual input to function and leave material traces behind.
          </p>
          <p>
            Equally embedded in this metabolism is human labor. The materials that enable digital life are extracted, refined, and assembled through physically demanding and often hazardous work, exposing miners and factory laborers to toxic substances and long-term health risks. Digital metabolism highlights how digital culture is inseparable from natural systems, human bodies, and planetary ecosystems, inviting a reconsideration of technological practices toward more environmentally aware and ethically grounded futures.
          </p>
        </div>
      </section>

      <section>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          What Is the Digital Metabolism Test?
        </h2>
        <div style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            The Digital Metabolism Test is an interactive experience designed to make these connections visible. It invites participants to reflect on how their everyday digital habits connect to larger systems of infrastructure, energy, labor, and material extraction.
          </p>
          <p>
            Rather than offering right or wrong answers, the test encourages curiosity and awareness, asking participants to consider their place within a shared digital ecosystem. You are here.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem'}}>
          <Button
            variant="outline"
            style={{ padding: '0.5rem 3rem' }}
            onClick={() => navigate('/')}
          >
            &#60; Home
          </Button>
          <Button
            style={{ padding: '0.5rem 3rem' }}
            onClick={() => navigate('/test')}
          >
            &#62; Take the Test
          </Button>
        </div>
      </section>
    </div>
  )
}
