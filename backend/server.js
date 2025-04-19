const app = require('./app');
const connectDB = require('./config/db');
const logger = require('./utils/logger');

connectDB().then(() => {
  app.listen(5000, () => {
    logger.info('Server running on port 5000');
  });
});
