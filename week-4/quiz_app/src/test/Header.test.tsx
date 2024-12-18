import { render, screen, fireEvent} from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom'


describe('Header Component', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('sets light theme on initial render if not in sessionStorage', () => {
    render(<Header />);
    expect(document.body.classList.contains('light')).toBe(true);
  });

  it('switches to dark theme on icon click',  () => {
    render(<Header />);
    const themeIcon = screen.getByTestId('theme-icon');
    expect(themeIcon).toBeInTheDocument(); // Check that the icon is rendered
    fireEvent.click(themeIcon);
    
    expect(document.body.classList.contains('dark')).toBe(true);
    expect(sessionStorage.getItem('theme')).toBe('dark');
  });

  it('persists theme across renders', () => {
    sessionStorage.setItem('theme', 'dark');
    render(<Header />);
    expect(document.body.classList.contains('dark')).toBe(true);
  });

  it('toggles back to light theme on second click',  () => {
    render(<Header />);
    const themeIcon = screen.getByTestId('theme-icon');
     fireEvent.click(themeIcon); 
     fireEvent.click(themeIcon); 
    expect(document.body.classList.contains('light')).toBe(true);
    expect(sessionStorage.getItem('theme')).toBe('light');
  });
});
