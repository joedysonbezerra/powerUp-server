import path from 'path';

export const staticFile = {
  endpoint: '/files',
  path: path.resolve(__dirname, '..', '..', '..', 'tmp'),
};
