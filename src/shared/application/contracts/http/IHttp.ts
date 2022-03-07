export interface IHttpResponse {
  statusCode: number;
  body: any;
}

export interface IHttpRequest {
  body?: any;
  headers?: any;
  query?: any;
  file?: any;
  params?: any;
}
