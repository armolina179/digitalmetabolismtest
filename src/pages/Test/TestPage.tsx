import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '../../components/ui/CircularProgress';
import { Button } from '../../components/ui/Button';
import { testSections, type Question } from './testData';

export function TestPage() {
  const navigate = useNavigate();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentSection = testSections[currentSectionIndex];
  const totalSections = testSections.length;
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === totalSections - 1;

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSectionIndex]);

  const handleAnswerChange = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleNext = () => {
    if (isLastSection) {
      // Navigate to results page when on last section
      navigate('/results');
    } else {
      setCurrentSectionIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstSection) {
      setCurrentSectionIndex((prev) => prev - 1);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '56.25rem', margin: '0 auto', position: 'relative' }}>
      <style>
        {`
          input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 1.125rem;
            height: 1.125rem;
            border: 0.125rem solid #000;
            border-radius: 50%;
            outline: none;
            cursor: pointer;
            position: relative;
            flex-shrink: 0;
          }
          input[type="radio"]:checked {
            background-color: #000;
          }
          input[type="radio"]:checked::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
          }
          .progress-tracker-wrapper {
            position: fixed;
            top: 2rem;
            right: 1rem;
            z-index: 1000;
            cursor: pointer;
          }
          .progress-tracker-wrapper .circular-progress > div {
            transition: opacity 0.2s;
          }
          .progress-tracker-wrapper:hover .circular-progress > div {
            opacity: 0;
          }
          .progress-tracker-wrapper .reset-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: var(--font-body);
            font-size: 0.875rem;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s;
            z-index: 2;
            text-transform: uppercase;
            text-align: center;
            background-color: #b3b3b3;
            padding: 1rem 0.5rem;
            border-radius: 62.4375rem;
            line-height: 1;
          }
          .progress-tracker-wrapper:hover .reset-text {
            opacity: 1;
          }
          @media (min-width: 1100px) {
            .progress-tracker-wrapper {
              right: calc((100dvw - 56.25rem) / 2 + 1rem);
            }
          }
        `}
      </style>
      <div
        style={{
          marginBottom: '3rem',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            fontSize: '2rem',
          }}
        >
          {currentSection.title}
        </h1>
      </div>
      <div
        className="progress-tracker-wrapper"
        onClick={() => navigate('/')}
        title="Reset Test"
      >
        <CircularProgress
          current={currentSectionIndex + 1}
          total={totalSections}
          size={100}
        />
        <span className="reset-text">Reset<br/>Test</span>
      </div>

      <div style={{ fontFamily: 'var(--font-body)', marginBottom: '1rem' }}>
        {currentSection.questions.map((question: Question) => (
          <div
            key={question.id}
            style={{
              marginBottom: '3rem',
              paddingBottom: '2rem',
              borderBottom: '0.0625rem solid #111',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                letterSpacing: '-0.05em',
                textTransform: 'uppercase',
              }}
            >
              {question.text}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {question.answers.map((answer) => (
                <label
                  key={answer.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#cecece';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={answer.id}
                    checked={answers[question.id] === answer.id}
                    onChange={() => handleAnswerChange(question.id, answer.id)}
                    style={{
                      marginTop: '0.20rem',
                      cursor: 'pointer',
                    }}
                  />
                  <span>{answer.text}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .test-navigation {
              margin-top: 1.5rem !important;
              padding-top: 1rem !important;
            }
          }
        `}
      </style>
      <div
        className="test-navigation"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          marginTop: '3rem',
          paddingTop: '2rem',
        }}
      >
        <Button
          size="md"
          variant="outline"
          onClick={handleBack}
          disabled={isFirstSection}
        >
          {'< Back'}
        </Button>
        <Button 
          size="md" 
          onClick={handleNext}>
          {isLastSection ? '> View Results' : 'Next Section >'}
        </Button>
      </div>
    </div>
  );
}
