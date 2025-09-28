import { Link } from "react-router-dom";

export function LandingNavbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Features
          </a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Login / Register buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
