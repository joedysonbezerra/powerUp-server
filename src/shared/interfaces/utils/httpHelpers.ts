import { IHttpResponse } from "../../application/contracts/http/IHttp";
import { HttpStatusCode } from "../enum/HttpStatusCode";

export const success = (body: any): IHttpResponse => ({
  statusCode: HttpStatusCode.SUCCESS,
  body,
});

export const redirect = (body: any): IHttpResponse => ({
  statusCode: HttpStatusCode.REDIRECT,
  body,
});

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: HttpStatusCode.NOT_FOUND,
  body: error,
});

export const forbidden = (error: Error): IHttpResponse => ({
  statusCode: HttpStatusCode.FORBIDDEN,
  body: error,
});
export const serverError = (): IHttpResponse => ({
  statusCode: 500,
  body: new Error("Internal Server Error"),
});
