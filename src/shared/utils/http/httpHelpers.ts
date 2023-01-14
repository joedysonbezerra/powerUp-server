import { IHttpResponse } from '../../domain/entities/IHttp';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export const success = (body: any): IHttpResponse => ({
  statusCode: StatusCodes.OK,
  body,
});

export const badRequest = (info: any): IHttpResponse => ({
  statusCode: StatusCodes.BAD_REQUEST,
  body: info,
});

export const forbidden = (info: any): IHttpResponse => ({
  statusCode: StatusCodes.FORBIDDEN,
  body: info,
});

export const serverError = (): IHttpResponse => ({
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  body: ReasonPhrases.INTERNAL_SERVER_ERROR,
});

export const notImplemented = (): IHttpResponse => ({
  statusCode: StatusCodes.NOT_IMPLEMENTED,
  body: ReasonPhrases.NOT_IMPLEMENTED,
});
