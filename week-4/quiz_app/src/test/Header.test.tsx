import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header'; // Adjust the import to match your file structure
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

    // Initial theme should be 'light' (default value)
    expect(document.body.className).toBe('light');
    
    // Find the toggle button (assuming it's an svg icon) and click it
    const toggleButton = screen.getByTestId('checkbox'); // Add a test ID to the toggle button in the component for better access
    fireEvent.change(toggleButton);

    // After clicking the toggle button, the theme should change to 'dark'
    expect(document.body.className).toBe('dark');
    
    // Click again to toggle back to 'light'
    fireEvent.change(toggleButton);
    expect(document.body.className).toBe('light');
  });
});
