import { render, screen, } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import { it, expect, describe , beforeEach,} from 'vitest'


describe('Header Component', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('sets light theme on initial render if not in sessionStorage', () => {
    render(<Header />);
    expect(document.body.classList.contains('light')).toBe(true);
  });

  it('switches to dark theme on icon click', async () => {
    render(<Header />);
    const themeIcon = screen.getAllByTestId('theme-icon')[0];
    await userEvent.click(themeIcon);
    expect(document.body.classList.contains('dark')).toBe(true);
    expect(sessionStorage.getItem('theme')).toBe('dark');
  });

  it('persists theme across renders', () => {
    sessionStorage.setItem('theme', 'dark');
    render(<Header />);
    expect(document.body.classList.contains('dark')).toBe(true);
  });

  it('toggles back to light theme on second click', async () => {
    render(<Header />);
    const themeIcon = screen.getAllByTestId('theme-icon')[1];
    await userEvent.click(themeIcon); 
    await userEvent.click(themeIcon); 
    expect(document.body.classList.contains('light')).toBe(true);
    expect(sessionStorage.getItem('theme')).toBe('light');
  });
});
