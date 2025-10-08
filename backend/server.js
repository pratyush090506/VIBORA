const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth');
const posterRoutes = require('./routes/poster');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB connected'))
    .catch((err)=>console.log(err))

app.use('/api/auth',authRoutes)
app.use('/api/poster',posterRoutes)

app.get('/',(req,res)=>res.send('Vibora Backend Running !'))

const PORT = process.env.PORT || 5001
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))

