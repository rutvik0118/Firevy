import app from './app.js';
import config from './config/env.js';
import connectDB from './config/db.js';

const startServer = async () => {
  // Connect to MongoDB
  await connectDB();

  const server = app.listen(config.port, () => {
    console.log(`
======================================================
  🚀 FIREVY.CO REST API SERVER IS ACTIVE
  📡 Port: ${config.port}
  🌍 Mode: ${config.nodeEnv}
  🔗 API Base: http://localhost:${config.port}/api/v1
  🏥 Health:   http://localhost:${config.port}/api/v1/health
======================================================
    `);
  });

  process.on('unhandledRejection', (err) => {
    console.error(`[Unhandled Rejection] ${err.message}`);
  });
};

startServer();
