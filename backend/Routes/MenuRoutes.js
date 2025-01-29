const express = require('express');
const router = express.Router();

const menuItems = [
  { id: 1, name: 'Burger', description: 'Juicy beef burger', price: 10, image: 'burger.jpg' },
  { id: 2, name: 'Pizza', description: 'Cheesy pepperoni pizza', price: 12, image: 'pizza.jpg' },
  { id: 3, name: 'Pasta', description: 'Creamy Alfredo pasta', price: 8, image: 'pasta.jpg' },
];

router.get('/', (req, res) => {
  res.json(menuItems);
});

module.exports = router;