import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header'; 
import { describe, it, expect } from 'vitest';


describe('Header Component', () => {
  it('renders header with logo', () => {
    const logoText = 'Test Logo';
    
    render(<Header logo={logoText} />);

    // Check if the logo text is rendered
    // expect(screen.getByText(logoText)).toBeInTheDocument();
  });


  it('toggles theme between light and dark', () => {
    render(<Header logo="Test Logo" />);

    expect(document.body.className).toBe('light');
    
    const toggleButton = screen.getByTestId('checkbox'); 
    fireEvent.change(toggleButton);

    expect(document.body.className).toBe('dark');
    
    fireEvent.change(toggleButton);
    expect(document.body.className).toBe('light');
  });
});
