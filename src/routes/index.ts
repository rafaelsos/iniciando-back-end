import { Router } from 'express';
import appointmentsRouter from './appointments.route';
import usersRouter from './users.route';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/appointments', appointmentsRouter);

export default routes;
