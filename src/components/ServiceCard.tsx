import { ServiceSummary } from '@/modules/services/types';
import { sanitizeHtml } from '@/lib/sanitize';
import Link from 'next/link';

interface ServiceCardProps {
  service: ServiceSummary;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const sanitizedDescription = sanitizeHtml(service.description);

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 font-bold text-xl mb-4">
          🐾
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">Starting at <strong className="text-gray-900">${service.startingPrice}</strong></span>
        <Link href={`/booking?service=${service.id}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          Book &rarr;
        </Link>
      </div>
    </div>
  );
}
