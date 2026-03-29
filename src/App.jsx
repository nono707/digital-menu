import { useEffect, useState } from 'react';
import menuData from './data/menuData';
import NavbarMenu from './components/NavbarMenu';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import MenuList from './components/MenuList';
import Cart from './components/Cart';
import ThemeToggle from './components/ThemeToggle';
import ItemModal from './components/ItemModal';
import ToastAlert from './components/ToastAlert';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('bloomCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('bloomTheme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Save cart in localStorage
  useEffect(() => {
    localStorage.setItem('bloomCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save theme + apply class to body
  useEffect(() => {
    localStorage.setItem('bloomTheme', JSON.stringify(darkMode));

    if (darkMode) {
      document.body.classList.add('dark-mode-body');
    } else {
      document.body.classList.remove('dark-mode-body');
    }
  }, [darkMode]);

  // Auto hide toast
  useEffect(() => {
    if (!toastMessage) return;

    const timer = setTimeout(() => {
      setToastMessage('');
    }, 2500);

    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Auto hide kitchen success popup
  useEffect(() => {
    if (!orderSuccess) return;

    const timer = setTimeout(() => {
      setOrderSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [orderSuccess]);

  const categories = ['All', ...new Set(menuData.map(item => item.category))];

  const filteredItems = menuData.filter(item => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    setToastMessage(`${item.name} added to your order ✨`);
  };

  const increaseQty = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cartItems
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);

    setCartItems(updatedCart);
  };

  const sendToKitchen = () => {
    if (cartItems.length === 0) return;

    const kitchenOrder = {
      orderId: Date.now(),
      items: cartItems,
      total: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      time: new Date().toLocaleString(),
      status: 'Sent to Kitchen',
    };

    localStorage.setItem('lastKitchenOrder', JSON.stringify(kitchenOrder));
    setCartItems([]);
    setOrderSuccess(true);
  };

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className={darkMode ? 'dark-mode app-wrapper' : 'app-wrapper'}>
      <NavbarMenu cartCount={totalCartCount} />

      <div className="container py-4">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="row g-4">
          <div className="col-lg-8">
            <MenuList
              items={filteredItems}
              addToCart={addToCart}
              openModal={setSelectedItem}
            />
          </div>

          <div className="col-lg-4">
            <Cart
              cartItems={cartItems}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              sendToKitchen={sendToKitchen}
            />
          </div>
        </div>
      </div>

      {selectedItem && (
        <ItemModal
          item={selectedItem}
          closeModal={() => setSelectedItem(null)}
          addToCart={addToCart}
        />
      )}

      {toastMessage && <ToastAlert message={toastMessage} />}

      {orderSuccess && (
        <div className="kitchen-success">
          <div className="kitchen-box">
            <i className="bi bi-check-circle-fill success-icon"></i>
            <h4>Order Sent to Kitchen</h4>
            <p>Your order has been received successfully.</p>
            <small>Estimated preparation time: 15–20 mins 🍽️</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;