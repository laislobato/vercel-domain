import { render, screen } from '@testing-library/react';
import App from './App';
import pag from './pagina.js';

test('renders learn react link', () => {
  render(<App />, <pag/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
