const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth');
const posterRoutes = require('./routes/poster');
const orderRoutes = require('./routes/order'); // Corrected import path if needed

dotenv.config();

const app = express();

// --- UPDATED CORS Configuration ---
// Only allow requests from your deployed frontend
const allowedOrigins = ['https://vibora.netlify.app']; // Your deployed frontend URL
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
// --- End of CORS Update ---

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB connected'))
    .catch((err)=>console.log(err))

app.use('/api/auth',authRoutes)
app.use('/api/poster',posterRoutes)
app.use('/api/orders',orderRoutes) // Ensure this line exists

app.get('/',(req,res)=>res.send('Vibora Backend Running !'))

const PORT = process.env.PORT || 5001 // Render sets PORT environment variable
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))

