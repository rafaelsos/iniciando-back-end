import { Router } from 'express';
import appointments from './appointments.route';

const routes = Router();

routes.use('/appointments', appointments);

export default routes;
