import { Router } from 'express';
import { container } from 'tsyringe';
import { adapterRoute } from '../../../../shared/interfaces/express/adapters/expressRouteAdapter';
import { UserController } from '../../http/controller/UserController';

export default (router: Router): void => {
  const userController = container.resolve(UserController);

  router.post('/users', adapterRoute(userController, 'store'));
};
