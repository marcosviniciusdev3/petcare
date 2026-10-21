import { ServiceSummary, Testimonial } from './types';

export const mockServices: ServiceSummary[] = [
  {
    id: 's1',
    title: 'Grooming',
    description: 'Full bath, haircut, nail trimming, and styling tailored to your pet breed.',
    startingPrice: 45,
    category: 'grooming',
  },
  {
    id: 's2',
    title: 'Veterinary Checkup',
    description: 'Comprehensive health examinations, vaccinations, and preventive care.',
    startingPrice: 60,
    category: 'health',
  },
  {
    id: 's3',
    title: 'Boarding',
    description: 'Safe, comfortable overnight stay with 24/7 supervision and playtime.',
    startingPrice: 40,
    category: 'boarding',
  },
  {
    id: 's4',
    title: 'Day-Care',
    description: 'Supervised daytime group play, socialization, and relaxation zones.',
    startingPrice: 30,
    category: 'daycare',
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 't1',
    authorName: 'Sarah Jenkins',
    petName: 'Max (Golden Retriever)',
    rating: 5,
    comment: 'PetCare is amazing! Max loves his grooming sessions and the staff treat him like family.',
  },
  {
    id: 't2',
    authorName: 'David Chen',
    petName: 'Luna (Domestic Shorthair)',
    rating: 5,
    comment: 'The veterinary checkup was thorough and stress-free. Highly recommended!',
  },
];
