// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login", { replace: true }); 
  };

  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Lightning fast loading times and smooth user experience"
    },
    {
      icon: "🔒",
      title: "Secure Access",
      description: "Enterprise-grade security protecting your data"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Real-time insights and comprehensive reporting"
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description: "Work seamlessly with your team members"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime" },
    { number: "50K+", label: "Users" },
    { number: "24/7", label: "Support" },
    { number: "1M+", label: "Transactions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome back, Admin!</span>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your products, track analytics, and collaborate with your team 
            from one powerful platform designed for modern businesses.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => navigate("/product")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl text-left hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="text-2xl mb-2">📦</div>
              <h3 className="text-xl font-semibold mb-2">Product Management</h3>
              <p className="text-blue-100">Manage your product catalog and inventory</p>
            </button>
            
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-xl text-left hover:from-green-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="text-xl font-semibold mb-2">View Analytics</h3>
              <p className="text-green-100">Check performance metrics and reports</p>
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div>
                <p className="font-semibold">New user registration</p>
                <p className="text-blue-100 text-sm">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div>
                <p className="font-semibold">Product update completed</p>
                <p className="text-blue-100 text-sm">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div>
                <p className="font-semibold">System maintenance scheduled</p>
                <p className="text-blue-100 text-sm">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Dashboard Pro. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;