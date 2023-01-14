import { Request, Response } from 'express';
import { IController } from '../../../domain/contracts/http/IController';
import { IHttpRequest } from '../../../domain/entities/IHttp';

export const adapterRoute = (controller: IController, method: string) => {
  return async (request: Request, response: Response) => {
    Object.assign(request.body, request.params);

    const httpRequest: IHttpRequest = {
      body: request.body,
      query: request.query,
    };

    const httpResponse = await controller.proxy(method, httpRequest);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      response.status(httpResponse.statusCode).json(httpResponse.body);
    } else if (httpResponse.statusCode === 301) {
      response.status(httpResponse.statusCode).redirect(httpResponse.body);
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body,
      });
    }
  };
};
