const express = require('express');
const color = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./connection/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./router/authRoute');
const contactRoutes = require('./router/contactRoute');
const projectRoutes = require('./router/projectRoute');
const servicesRoutes = require('./router/servicesRoute');
const skillRoutes = require('./router/skillRoute');
const testimonialRoutes = require('./router/testimonialRoute');
const timelineRoutes = require('./router/timelineRoute');

//CONFIGURE ENV
dotenv.config(); // dotenv.config({path:""}) if file is not in root folder

//DATABASE
connectDB();

//REST OBJECT
const app = express();

//MIDDELWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use("/uploads", express.static('uploads'))

//ROUTES

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/project', projectRoutes);
app.use('/api/v1/services', servicesRoutes);
app.use('/api/v1/skill', skillRoutes);
app.use('/api/v1/testimonial', testimonialRoutes);
app.use('/api/v1/timeline', timelineRoutes);

//REST API
app.get('/', (req, res) => {
    res.send('Hello Ji main aa gya');
});

//PORT and LISTEN SECTION
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`port is running at ${PORT}`.bgBlue);
});
