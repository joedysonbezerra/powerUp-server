import { Request, Response } from "express";
import { Controller } from "../../../application/contracts/controller/IController";
import {
  IHttpRequest,
  IHttpResponse,
} from "../../../application/contracts/http/IHttp";

export const adapterRoute = (
  controller: Controller<IHttpRequest, IHttpResponse>,
  method: string
) => {
  return async (request: Request, response: Response) => {
    Object.assign(request.body, request.params);

    const httpRequest: IHttpRequest = {
      body: request.body,
      query: request.query,
    };
    const httpResponse = await controller.handle(method, httpRequest);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      response.status(httpResponse.statusCode).json(httpResponse.body);
    } else if (httpResponse.statusCode === 301) {
      response.status(httpResponse.statusCode).redirect(httpResponse.body);
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};
