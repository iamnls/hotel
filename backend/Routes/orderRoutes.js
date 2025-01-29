const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).send('Error placing order');
  }
});

router.get('/:tableId', async (req, res) => {
  try {
    const { tableId } = req.params;
    const orders = await Order.find({ tableId });
    res.json(orders);
  } catch (error) {
    res.status(500).send('Error retrieving orders');
  }
});

module.exports = router;