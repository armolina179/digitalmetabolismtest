import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { HomePage } from '../pages/Home/HomePage';
import { IntroductionPage } from '../pages/Introduction/IntroductionPage';
import { TestPage } from '../pages/Test/TestPage';
import { ResultsPage } from '../pages/Results/ResultsPage';
import { ResourcesPage } from '../pages/Resources/ResourcesPage';
import { SurveyPage } from '../pages/Survey/SurveyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'introduction',
        element: <IntroductionPage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
      {
        path: 'results',
        element: <ResultsPage />,
      },
      {
        path: 'resources',
        element: <ResourcesPage />,
      },
      {
        path: 'survey',
        element: <SurveyPage />,
      },
    ],
  },
]);
