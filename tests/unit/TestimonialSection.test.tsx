import { render, screen } from '@testing-library/react';
import { TestimonialSection } from '@/components/TestimonialSection';
import { describe, it, expect } from 'vitest';
import { mockTestimonials } from '@/modules/services/data';

describe('TestimonialSection', () => {
  it('renders customer testimonials and reviews', () => {
    render(<TestimonialSection testimonials={mockTestimonials} />);
    
    expect(screen.getByText('Sarah Jenkins')).toBeDefined();
    expect(screen.getByText('David Chen')).toBeDefined();
    expect(screen.getByText(/PetCare is amazing!/i)).toBeDefined();
  });
});
