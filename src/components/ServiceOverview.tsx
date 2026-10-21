import { ServiceSummary } from '@/modules/services/types';
import { ServiceCard } from '@/components/ServiceCard';

interface ServiceOverviewProps {
  services: ServiceSummary[];
}

export function ServiceOverview({ services }: ServiceOverviewProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Pet Care Services</h2>
          <p className="text-gray-600">From regular checkups and grooming to luxury boarding and daycare, we provide comprehensive care tailored to every pet.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
