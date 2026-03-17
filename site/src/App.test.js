import { render, screen } from '@testing-library/react';

// Mock @vercel/speed-insights before importing App
jest.mock('@vercel/speed-insights/react', () => ({
  SpeedInsights: () => null,
}), { virtual: true });

import App from './App';

test('renders newspaper title', () => {
  render(<App />);
  const titleElement = screen.getByText(/JORNAL WW3362/i);
  expect(titleElement).toBeInTheDocument();
});
