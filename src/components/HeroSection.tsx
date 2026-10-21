import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50/50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Professional Care for Your <span className="text-primary-600">Beloved Pets</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-10">
          Streamline daily care operations, book expert veterinary and grooming services, and track your pet wellness all in one place.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/booking" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition">
            Book an Appointment
          </Link>
          <Link href="#services" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl border border-gray-200 transition">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
