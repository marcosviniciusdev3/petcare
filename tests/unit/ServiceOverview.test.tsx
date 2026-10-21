import { render, screen } from '@testing-library/react';
import { ServiceOverview } from '@/components/ServiceOverview';
import { describe, it, expect } from 'vitest';
import { mockServices } from '@/modules/services/data';

describe('ServiceOverview', () => {
  it('renders service overview cards with titles and starting prices', () => {
    render(<ServiceOverview services={mockServices} />);
    
    expect(screen.getByText('Grooming')).toBeDefined();
    expect(screen.getByText('Veterinary Checkup')).toBeDefined();
    expect(screen.getByText('$45')).toBeDefined();
    expect(screen.getByText('$60')).toBeDefined();
  });
});
