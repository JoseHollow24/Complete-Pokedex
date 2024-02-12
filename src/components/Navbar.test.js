import i18n from '@/utils/i18n.js'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar renders correctly', () => {
  render(<Navbar/>);
  // Render
  expect(screen.getByRole('navigation')).toBeInTheDocument();

  // Aria label attributes
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('aria-label', `${i18n.t('pokedex')}`);
});