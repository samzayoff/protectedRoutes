import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login", { replace: true });
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Laptop",
      category: "Electronics",
      price: "$1,299.99",
      stock: 15,
      rating: 4.8,
      image: "💻",
      description: "High-performance laptop for professionals and creatives"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      category: "Audio",
      price: "$199.99",
      stock: 42,
      rating: 4.6,
      image: "🎧",
      description: "Noise-cancelling wireless headphones with premium sound"
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Wearables",
      price: "$349.99",
      stock: 28,
      rating: 4.5,
      image: "⌚",
      description: "Advanced smartwatch with health monitoring features"
    },
    {
      id: 4,
      name: "Digital Camera",
      category: "Photography",
      price: "$899.99",
      stock: 8,
      rating: 4.9,
      image: "📷",
      description: "Professional mirrorless camera with 4K video"
    },
    {
      id: 5,
      name: "Gaming Console",
      category: "Gaming",
      price: "$499.99",
      stock: 35,
      rating: 4.7,
      image: "🎮",
      description: "Next-generation gaming console with immersive gameplay"
    },
    {
      id: 6,
      name: "Fitness Tracker",
      category: "Wearables",
      price: "$129.99",
      stock: 67,
      rating: 4.3,
      image: "🏃‍♂️",
      description: "Advanced fitness tracker with heart rate monitoring"
    }
  ];

  const categories = ["All", "Electronics", "Audio", "Wearables", "Photography", "Gaming"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/home")}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Product Catalog</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 hidden md:block">Manage your products</span>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-gray-900">{products.length}</div>
            <div className="text-gray-600">Total Products</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-green-600">
              {products.filter(p => p.stock > 10).length}
            </div>
            <div className="text-gray-600">In Stock</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {products.filter(p => p.stock <= 10 && p.stock > 0).length}
            </div>
            <div className="text-gray-600">Low Stock</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-red-600">
              {products.filter(p => p.stock === 0).length}
            </div>
            <div className="text-gray-600">Out of Stock</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              <span className="text-gray-600 text-lg ml-2">({filteredProducts.length} items)</span>
            </h2>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
              Add New Product
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-1">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{product.image}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock > 10 ? 'bg-green-100 text-green-800' :
                        product.stock > 0 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                      }`}>
                      {product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Category: {product.category}</span>
                    <span>Stock: {product.stock}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-200 text-sm">
                      Edit
                    </button>
                    <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors duration-200 text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Product Management Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-all duration-200 text-left">
              <div className="text-xl mb-2">📦</div>
              <h3 className="font-semibold">Bulk Import</h3>
              <p className="text-blue-100 text-sm">Upload multiple products at once</p>
            </button>
            <button className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-all duration-200 text-left">
              <div className="text-xl mb-2">📊</div>
              <h3 className="font-semibold">Sales Analytics</h3>
              <p className="text-blue-100 text-sm">View product performance reports</p>
            </button>
            <button className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-all duration-200 text-left">
              <div className="text-xl mb-2">🔄</div>
              <h3 className="font-semibold">Sync Inventory</h3>
              <p className="text-blue-100 text-sm">Update stock levels automatically</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;