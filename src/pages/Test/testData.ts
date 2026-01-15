export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export const testSections: Section[] = [
  {
    id: 'node',
    title: 'I. The Node',
    questions: [
      {
        id: 'node-1',
        text: 'How many personal digital devices have passed through your life?',
        answers: [
          { id: 'node-1-a', text: 'Just one, and it remains with me.' },
          { id: 'node-1-b', text: 'A few, replaced over time.' },
          { id: 'node-1-c', text: 'Enough that I no longer keep track.' },
        ],
      },
      {
        id: 'node-2',
        text: 'How often do you reach for your phone in a typical day?',
        answers: [
          { id: 'node-2-a', text: 'Less than most.' },
          { id: 'node-2-b', text: 'About average (3 1/2 hours)' },
          { id: 'node-2-c', text: 'More than I intend to.' },
        ],
      },
      {
        id: 'node-3',
        text: 'If your phone disappeared tomorrow, what would you feel first?',
        answers: [
          { id: 'node-3-a', text: 'Relief' },
          { id: 'node-3-b', text: 'Stress' },
          { id: 'node-3-c', text: 'Annoyance' },
          { id: 'node-3-d', text: 'Indifference' },
        ],
      },
      {
        id: 'node-4',
        text: 'How do you understand your relationship to technology?',
        answers: [
          { id: 'node-4-a', text: 'I am both a user and a consumer.' },
          { id: 'node-4-b', text: 'I feel like neither.' },
          { id: 'node-4-c', text: 'I lean more toward one than the other.' },
        ],
      },
      {
        id: 'node-5',
        text: 'Have you ever imagined yourself becoming viral?',
        answers: [
          { id: 'node-5-a', text: 'Yes, I feel I have something to share.' },
          { id: 'node-5-b', text: 'No, attention feels uncomfortable.' },
          { id: 'node-5-c', text: 'Only if it brought financial freedom.' },
        ],
      },
      {
        id: 'node-6',
        text: 'When you think about what your phone is made of, what feels closest?',
        answers: [
          { id: 'node-6-a', text: 'Probably more toxic materials than I want to know.' },
          { id: 'node-6-b', text: 'I have no idea.' },
          { id: 'node-6-c', text: 'The information feels intentionally hidden.' },
        ],
      },
    ],
  },
  {
    id: 'network',
    title: 'II. The Network',
    questions: [
      {
        id: 'network-1',
        text: 'How aware are you of the digital infrastructure (wires, data centers) around you?',
        answers: [
          { id: 'network-1-a', text: 'I assume it is vast and expanding.' },
          { id: 'network-1-b', text: 'I\'m largely unaware.' },
          { id: 'network-1-c', text: 'I\'m more concerned with how it is powered.' },
        ],
      },
      {
        id: 'network-2',
        text: 'The internet depends on physical cables crossing land and ocean. How do you imagine their scale?',
        answers: [
          { id: 'network-2-a', text: 'Roughly 75,000 miles.' },
          { id: 'network-2-b', text: 'Comparable to a human lifetime of walking.' },
          { id: 'network-2-c', text: 'Enough to circle the planet three times.' },
        ],
      },
      {
        id: 'network-3',
        text: 'Do you know what kind of energy supports your digital life?',
        answers: [
          { id: 'network-3-a', text: 'Mostly fossil fuels.' },
          { id: 'network-3-b', text: 'A mix of sources.' },
          { id: 'network-3-c', text: 'Primarily renewable, by choice.' },
        ],
      },
      {
        id: 'network-4',
        text: 'How secure do you believe your personal data is?',
        answers: [
          { id: 'network-4-a', text: 'Secure.' },
          { id: 'network-4-b', text: 'Uncertain.' },
          { id: 'network-4-c', text: 'Not secure.' },
        ],
      },
      {
        id: 'network-5',
        text: 'If you feel confident about your data\'s security, how certain are you?',
        answers: [
          { id: 'network-5-a', text: 'Somewhat.' },
          { id: 'network-5-b', text: 'Not really.' },
          { id: 'network-5-c', text: 'I\'m trusting the system.' },
          { id: 'network-5-d', text: 'Completely, it is out of reach by others.' },
        ],
      },
      {
        id: 'network-6',
        text: 'Where do you place yourself between physical and digital existence?',
        answers: [
          { id: 'network-6-a', text: 'Entirely physical, digital existence does not exist.' },
          { id: 'network-6-b', text: 'Somewhere in between.' },
          { id: 'network-6-c', text: 'Deeply digital.' },
        ],
      },
      {
        id: 'network-7',
        text: 'Do you know where the materials inside your phone originated?',
        answers: [
          { id: 'network-7-a', text: 'Yes, and I seek ethical sourcing.' },
          { id: 'network-7-b', text: 'No, but I would like to.' },
          { id: 'network-7-c', text: 'I haven\'t considered it.' },
        ],
      },
    ],
  },
  {
    id: 'time',
    title: 'III. The Time Layer',
    questions: [
      {
        id: 'time-1',
        text: 'How does the concept of the "internet of things" make you feel?',
        answers: [
          { id: 'time-1-a', text: 'Optimistic.' },
          { id: 'time-1-b', text: 'Underwhelmed.' },
          { id: 'time-1-c', text: 'Uneasy.' },
          { id: 'time-1-d', text: 'Uncertain.' },
        ],
      },
      {
        id: 'time-2',
        text: 'When you hear the word "cyborg," what resonates?',
        answers: [
          { id: 'time-2-a', text: 'Fiction.' },
          { id: 'time-2-b', text: 'Aspiration.' },
          { id: 'time-2-c', text: 'Uncertainty.' },
          { id: 'time-2-d', text: 'We are already cyborgs.' },
        ],
      },
      {
        id: 'time-3',
        text: 'How do you feel about technologies embedded in everyday environments, or atmospheric media?',
        answers: [
          { id: 'time-3-a', text: 'Encouraged by their scale; 26 billion connected devices are a step in the right direction.' },
          { id: 'time-3-b', text: 'Neutral — they\'re convenient.' },
          { id: 'time-3-c', text: 'Emotionally distant.' },
        ],
      },
      {
        id: 'time-4',
        text: 'How do location-aware technologies make you feel?',
        answers: [
          { id: 'time-4-a', text: 'Excited, the future of video gaming is location based.' },
          { id: 'time-4-b', text: 'Safe, I am always discoverable.' },
          { id: 'time-4-c', text: 'Suspicious, we deserve to opt out.' },
        ],
      },
      {
        id: 'time-5',
        text: 'Should we care more about what our technologies are made from?',
        answers: [
          { id: 'time-5-a', text: 'Yes, technological progress reshapes ecosystems.' },
          { id: 'time-5-b', text: 'Yes, especially the people who extract and manufacture these systems.' },
          { id: 'time-5-c', text: 'No, the future matters more than the cost.' },
        ],
      },
    ],
  },
];
