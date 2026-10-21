import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';
import { describe, it, expect } from 'vitest';

describe('HomeCTAs and Navigation', () => {
  it('renders navbar links and sign in / book now actions', () => {
    render(<Navbar />);
    
    expect(screen.getByRole('link', { name: /services/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /pricing/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /sign in/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /book now/i })).toBeDefined();
  });
});
