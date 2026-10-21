export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className="text-xl font-bold text-primary-600">🐾 PetCare</span>
          <span className="text-gray-500 text-sm">© 2026 PetCare Management System. All rights reserved.</span>
        </div>
        <div className="flex space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-primary-600">Privacy Policy</a>
          <a href="#" className="hover:text-primary-600">Terms of Service</a>
          <a href="#" className="hover:text-primary-600">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
