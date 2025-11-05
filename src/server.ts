import express from 'express';
import orderRoutes from './routes/orders.routes';

const app = express();
app.use(express.json());
app.use('/api', orderRoutes);

export default app;


