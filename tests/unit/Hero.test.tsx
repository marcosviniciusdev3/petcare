import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/HeroSection';
import { describe, it, expect } from 'vitest';

describe('HeroSection', () => {
  it('renders hero banner with headline and booking CTA', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toMatch(/Professional Care for Your Beloved Pets/i);
    
    const ctaButton = screen.getByRole('link', { name: /Book an Appointment/i });
    expect(ctaButton).toBeDefined();
    expect(ctaButton.getAttribute('href')).toBe('/booking');
  });
});
