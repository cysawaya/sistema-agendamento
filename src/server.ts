import express from 'express';
import routers from 'inspector';

const app = express();
app.use(express.json());
app.use('/api');

export default app;


