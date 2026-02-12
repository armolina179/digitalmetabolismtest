import { Button } from "../../components/ui/Button";
import { useNavigate } from 'react-router-dom';
import { TechnosphereScroller } from '../../components/TechnosphereScroller';

export function ResourcesPage() {
  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .resources-section-title {
              font-size: 1.25rem !important;
            }

            .button {
              font-size: 1rem !important;
              padding: 0.5rem 1rem !important;
            }
          }
        `}
      </style>
      <div style={{ padding: '2rem', maxWidth: '50rem', margin: '0 auto' }}>
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
        We must begin to tell new stories that illustrate our Anthropocenic togetherness. In our blind adoption of techno-reproduction as the apex of human progress, we have sentenced ourselves to lives lived with those technologies and the implications of their geophysical wastes.<br></br> - Amanda Starling Gould
      </blockquote>

      <section style={{ marginBottom: '1rem' }}>
        <h2
          className="resources-section-title"
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
                color: 'rgb(0, 0, 0)',
                textDecoration: 'underline',
                textDecorationThickness: '0.0625rem',
                textUnderlineOffset: '0.125rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecorationThickness = '0.125rem';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecorationThickness = '0.0625rem';
              }}
            >
              digital–environmental metabolism
            </a>
            , is a term that describes how digital technologies (phones, computers, networked devices, and the internet) are embedded within physical, ecological, and human systems. Digital systems are woven into the material world, functioning through exchanges of energy and resources that resemble metabolic processes of living organisms. As we continue to expand the{' '}
            <a
              href="https://anthropocene.univie.ac.at/resources/technosphere/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#000',
                textDecoration: 'underline',
                textDecorationThickness: '0.0625rem',
                textUnderlineOffset: '0.125rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecorationThickness = '0.125rem';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecorationThickness = '0.0625rem';
              }}
            >
              technosphere
            </a>
            , grounding it within its physical and ecological realities becomes increasingly urgent.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Every digital action (messaging, streaming, shopping, etc.) is supported by vast physical infrastructures: data centers, servers, cables, and devices that consume energy and generate waste. These systems are fed by resources extracted from the earth; metals mined from the ground, chemicals used in processing, and electricity required to sustain constant operation. And they produce waste in return; electronic waste, chemical pollution, and carbon emissions. Digital systems, like bodies, require continual input to function and leave material traces behind.
          </p>
          <p>
            Equally embedded in this metabolism is human labor. The materials that enable digital life are extracted, refined, and assembled through physically demanding and often hazardous work, exposing miners and factory laborers to toxic substances and long-term health risks. Digital metabolism highlights how digital culture is inseparable from human bodies and our shared environment, inviting a reconsideration of technological practices toward more environmentally aware and ethically grounded futures.
          </p>
        </div>
      </section>
      <section>
        <h2
          className="resources-section-title"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            textAlign: 'right',
          }}
        >
          The Technosphere
        </h2>
        <div style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6', fontSize: '0.875rem'}}>
          <p style={{ marginBottom: '1.5rem', textAlign: 'right', color: '#505050', fontStyle: 'italic' }}>
            (Hover over the images to see the extended captions) <br/>
          </p>
        </div>
      </section>
      </div>


    <section style={{ marginBottom: '1rem', width: '100%' }}>
      <TechnosphereScroller />
    </section>

    <div style={{ padding: '2rem', maxWidth: '50rem', margin: '0 auto' }}>
      <section>
        <h2
          className="resources-section-title"
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
          The test is an experiment in making these connections visible. It asks: where do you fit within this system? What role do your habits, choices, and digital behaviors play in these larger flows of energy, materials, and labor?
          <br></br><br></br>
            There are no right or wrong answers, just an invitation to locate yourself. You are here. So where is "here," exactly?
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
          <Button
            className="button"
            variant="outline"
            style={{ padding: '0.5rem 3rem' }}
            onClick={() => navigate('/')}
          >
            &#60; Home
          </Button>
          <Button
            className="button"
            style={{ padding: '0.5rem 3rem' }}
            onClick={() => navigate('/introduction')}
          >
            &#62; Take the Test
          </Button>
        </div>
      </section>
      </div>
    </>
  )
}
