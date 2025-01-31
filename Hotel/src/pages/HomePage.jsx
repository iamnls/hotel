import React from 'react';
import './HomePage.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Gourmet Restaurant</h1>
          <p>Your best dining experience awaits</p>
          <button>Explore Our Menu</button>
        </div>
      </section>

      <section id="menu" className="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="/images/menu-1.jpg" alt="Dish 1" />
            <h3>Dish 1</h3>
            <p>Delicious and freshly prepared</p>
          </div>
          <div className="menu-item">
            <img src="/images/menu-2.jpg" alt="Dish 2" />
            <h3>Dish 2</h3>
            <p>Made with the finest ingredients</p>
          </div>
          <div className="menu-item">
            <img src="/images/menu-3.jpg" alt="Dish 3" />
            <h3>Dish 3</h3>
            <p>Savory and mouth-watering</p>
          </div>
          <div className="menu-item">
            <img src="/images/menu-4.jpg" alt="Dish 3" />
            <h3>Dish 4</h3>
            <p>Savory and mouth-watering</p>
          </div>
          <div className="menu-item">
            <img src="/images/menu-5.jpg" alt="Dish 3" />
            <h3>Dish 5</h3>
            <p>Savory and mouth-watering</p>
          </div>
          <div className="menu-item">
            <img src="/images/menu-6.jpg" alt="Dish 3" />
            <h3>Dish 6</h3>
            <p>Savory and mouth-watering</p>
          </div>
          <div className="menu-item">
            <img src="/images/menu-7.jpg" alt="Dish 3" />
            <h3>Dish73</h3>
            <p>Savory and mouth-watering</p>
          </div>
          <div className="menu-item">
            <img src="/images/menu-8.jpg" alt="Dish 3" />
            <h3>Dish 8</h3>
            <p>Savory and mouth-watering</p>
          </div>

        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@gourmetrestaurant.com</p>
        <p>Phone: (977) 123-45678</p>
      </section>

      <footer>
        <p>&copy; 2025 Gourmet Restaurant</p>
      </footer>
    </div>
  );
}

export default App;
