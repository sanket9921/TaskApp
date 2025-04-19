const express = require('express');
const cors = require('cors');

const morgan = require('morgan');
const logger = require('./utils/logger');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

logger.info('App setup complete');

module.exports = app;
