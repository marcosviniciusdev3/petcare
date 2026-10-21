import Link from 'next/link';

export function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-600">🐾 PetCare</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-gray-600 hover:text-primary-600 font-medium">Services</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-primary-600 font-medium">Pricing</Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-primary-600 font-medium">Testimonials</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/auth/signin" className="text-gray-600 hover:text-primary-600 font-medium px-3 py-2">Sign In</Link>
          <Link href="/booking" className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
