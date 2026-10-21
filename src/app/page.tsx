import { HeroSection } from '@/components/HeroSection';
import { ServiceOverview } from '@/components/ServiceOverview';
import { TestimonialSection } from '@/components/TestimonialSection';
import { mockServices, mockTestimonials } from '@/modules/services/data';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceOverview services={mockServices} />
      <TestimonialSection testimonials={mockTestimonials} />
    </>
  );
}
