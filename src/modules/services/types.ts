export interface ServiceSummary {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  category: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  petName: string;
  rating: number;
  comment: string;
  avatarUrl?: string;
}
