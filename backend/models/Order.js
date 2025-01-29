const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  tableId: { type: Number, required: true },
  items: [{ name: String, quantity: Number, price: Number }],
  totalPrice: { type: Number, required: true },
  orderTime: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Order', orderSchema);