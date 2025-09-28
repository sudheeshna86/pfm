import { LandingNavbar } from "./LandingNavbar";

export const LandingPage = () => {
  return (
    <div>
      {/* Navbar with Login/Register */}
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-20 text-center">
        <h1 className="text-5xl font-bold mt-10 text-gray-900 dark:text-white">
          Welcome to FinanceHub 🚀
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
          Track your expenses, manage budgets, and achieve financial goals all in one place.
        </p>
      </section>
    </div>
  );
};
