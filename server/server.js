import app from './app.js';
import { config } from 'dotenv';

// Load environment variables
config({ path: './config/config.env' });

// Set PORT
const PORT = process.env.PORT || 5000;

// Listen to PORT
app.listen(PORT, () =>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
