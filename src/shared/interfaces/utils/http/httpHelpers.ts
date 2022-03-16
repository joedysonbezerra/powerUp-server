import { IHttpResponse } from '../../../domain/contracts/http/IHttp';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export const success = (body: any): IHttpResponse => ({
  statusCode: StatusCodes.OK,
  body,
});

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: StatusCodes.BAD_REQUEST,
  body: error,
});

export const forbidden = (error: Error): IHttpResponse => ({
  statusCode: StatusCodes.FORBIDDEN,
  body: error,
});

export const serverError = (): IHttpResponse => ({
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  body: ReasonPhrases.INTERNAL_SERVER_ERROR,
});

export const notImplemented = (): IHttpResponse => ({
  statusCode: StatusCodes.NOT_IMPLEMENTED,
  body: ReasonPhrases.NOT_IMPLEMENTED,
});
