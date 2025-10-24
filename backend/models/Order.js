const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      title: { type: String, required: true },
      price: { type: Number, required: true },
      imageUrl: { type: String },
      // You can add quantity here later if you implement it
      // quantity: { type: Number, default: 1 }
    }
  ],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Processing', // e.g., Processing, Shipped, Delivered
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
