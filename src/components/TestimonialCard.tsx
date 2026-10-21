import { Testimonial } from '@/modules/services/types';
import { sanitizeHtml } from '@/lib/sanitize';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const sanitizedComment = sanitizeHtml(testimonial.comment);

  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-1 text-yellow-400 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <p className="text-gray-700 italic mb-6" dangerouslySetInnerHTML={{ __html: sanitizedComment }} />
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
          {testimonial.authorName.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{testimonial.authorName}</h4>
          <p className="text-gray-500 text-xs">{testimonial.petName}</p>
        </div>
      </div>
    </div>
  );
}
