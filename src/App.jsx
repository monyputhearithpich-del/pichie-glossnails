import React, { useState } from 'react';
import { Heart, Sparkles, Instagram, Facebook, Send, ShoppingBag, Star, Search, X, Minus, Plus, Trash2, Check, Zap, Award, Shield } from 'lucide-react';

export default function PichieNailGloss() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Floral', 'Glitter', 'Pastel', 'Metallic'];

  const products = [
    { id: 1, name: "Blossom Dreams", price: 12.99, category: "Floral", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80", description: "Soft pink florals with delicate pearl accents", rating: 4.9, reviews: 156, stock: 15 },
    { id: 2, name: "Lavender Bliss", price: 11.99, category: "Pastel", image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80", description: "Pastel purple with glossy finish", rating: 4.8, reviews: 89, stock: 8 },
    { id: 3, name: "Sugar Crystal", price: 13.99, category: "Glitter", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80", description: "Crystal clear with glitter sparkles", rating: 5.0, reviews: 203, stock: 3 },
    { id: 4, name: "Peachy Keen", price: 11.99, category: "Pastel", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80", description: "Soft peach tones with shimmer", rating: 4.7, reviews: 67, stock: 12 },
    { id: 5, name: "Baby Blue Sky", price: 12.99, category: "Pastel", image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80", description: "Light blue with cloud-like gradient", rating: 4.9, reviews: 134, stock: 20 },
    { id: 6, name: "Rose Gold Glam", price: 14.99, category: "Metallic", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", description: "Metallic rose gold luxury finish", rating: 5.0, reviews: 189, stock: 5 },
    { id: 7, name: "Midnight Elegance", price: 13.99, category: "Metallic", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80", description: "Deep navy with gold flakes", rating: 4.8, reviews: 92, stock: 18 },
    { id: 8, name: "Cherry Blossom", price: 12.99, category: "Floral", image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80", description: "Pink cherry blossom art design", rating: 4.9, reviews: 145, stock: 10 }
  ];

  const reviews = [
    { name: "Sarah M.", rating: 5, text: "Absolutely love these! So easy to apply and they last forever ✨", verified: true, date: "2 days ago" },
    { name: "Jessica L.", rating: 5, text: "The cutest nails ever! Got so many compliments 💖", verified: true, date: "1 week ago" },
    { name: "Emma K.", rating: 5, text: "Perfect quality and the designs are gorgeous!", verified: true, date: "2 weeks ago" },
    { name: "Lisa Chen", rating: 5, text: "Best press-on nails I've tried. Worth every penny!", verified: true, date: "3 weeks ago" }
  ];

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => item.id === id ? {...item, quantity: Math.max(1, item.quantity + delta)} : item));
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 text-sm font-medium">
        <Sparkles className="inline mr-2" size={14} />
        Order via Telegram or Instagram 💖
        <Sparkles className="inline ml-2" size={14} />
      </div>

      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-400 to-purple-400 p-2 rounded-xl">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Pichie</h1>
                <p className="text-xs text-gray-600 font-medium">NailGloss</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setShowCart(true)} className="relative">
                <ShoppingBag className="text-pink-500" size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
              <button className="relative">
                <Heart className="text-pink-500" size={24} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search for your perfect nails..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none transition" />
          </div>
        </div>
      </header>

      <section className="relative max-w-7xl mx-auto px-4 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-purple-200/30 blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-pink-400" size={24} />
            <span className="text-pink-500 font-bold text-lg">Press-On Perfection</span>
            <Sparkles className="text-pink-400" size={24} />
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Glossy nails,<br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">happy vibes</span> ✨
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">Premium press-on nails crafted with love. Salon-quality results in minutes 💖</p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
              <Shield className="text-green-500" size={20} />
              <span className="text-sm font-medium">Safe Materials</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
              <Zap className="text-yellow-500" size={20} />
              <span className="text-sm font-medium">Fast delivering</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
              <Award className="text-purple-500" size={20} />
              <span className="text-sm font-medium">Top Rated</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#products" className="group bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Shop Now
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                <Instagram className="text-pink-500" size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                <Facebook className="text-blue-500" size={24} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                <Send className="text-sky-500" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === cat ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-pink-50'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Our Collection</h3>
          <p className="text-gray-600 text-lg">Handpicked designs for every mood 🌸</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <button onClick={() => toggleWishlist(product)} className="absolute top-3 right-3 z-10 bg-white/90 p-2 rounded-full hover:scale-110 transition-transform">
                  <Heart className={wishlist.find(item => item.id === product.id) ? "text-pink-500 fill-pink-500" : "text-gray-400"} size={20} />
                </button>
                <img src={product.image} alt={product.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                <button onClick={() => setSelectedProduct(product)} className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-pink-500 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Quick View</span>
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
                  ))}
                  <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-pink-500">${product.price}</span>
                  {product.stock < 10 && <span className="text-xs text-red-500 font-medium">Only {product.stock} left!</span>}
                </div>
                <button onClick={() => addToCart(product)} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">What They Say</h3>
          <p className="text-gray-600 text-lg">Loved by thousands of nail enthusiasts 💕</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-gray-800 mb-4 font-medium">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-900">{review.name}</p>
                {review.verified && (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <Check size={12} />Verified
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">{review.date}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">© 2024 Pichie NailGloss. Made with 💖</p>
          <p className="text-sm">Press-on, shine-on ✨</p>
        </div>
      </footer>

      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end" onClick={() => setShowCart(false)}>
          <div className="bg-white w-full max-w-md h-full overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Shopping Cart</h3>
                <button onClick={() => setShowCart(false)}><X size={24} /></button>
              </div>
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="text-gray-300 mx-auto mb-4" size={64} />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-4 bg-pink-50 p-4 rounded-2xl">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">${item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button onClick={() => updateQuantity(item.id, -1)} className="bg-white p-1 rounded-full"><Minus size={14} /></button>
                            <span className="font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="bg-white p-1 rounded-full"><Plus size={14} /></button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500"><Trash2 size={20} /></button>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between text-2xl font-black text-pink-500">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => {
                        const orderItems = cart.map(item => `• ${item.name} × ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n');
                        const message = `Hi Pichie NailGloss 💖\n\nI'd like to order:\n${orderItems}\n\nTotal: $${total.toFixed(2)}\n\nLooking forward to your reply!`;
                        window.open(`https://t.me/pichei_ree?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-full font-black text-lg hover:shadow-2xl transition-all">
                      Checkout via Telegram
                    </button>
                    <button 
                      onClick={() => window.open('https://www.instagram.com/pichienailgloss/', '_blank')}
                      className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-full font-bold hover:shadow-xl transition-all mt-3 flex items-center justify-center gap-2">
                      <Instagram size={20} />
                      Or Message on Instagram
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8" onClick={e => e.stopPropagation()}>
            <div className="grid md:grid-cols-2 gap-6">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-80 object-cover rounded-2xl" />
              <div>
                <h4 className="text-3xl font-black text-gray-900 mb-2">{selectedProduct.name}</h4>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={i < Math.floor(selectedProduct.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={16} />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({selectedProduct.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                <p className="text-4xl font-black text-pink-500 mb-6">${selectedProduct.price}</p>
                <button onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-full font-black text-lg hover:shadow-2xl transition-all mb-3">
                  Add to Cart
                </button>
                <button onClick={() => setSelectedProduct(null)} className="w-full text-gray-600 hover:text-gray-800 font-medium">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}