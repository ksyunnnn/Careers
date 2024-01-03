const info = (message?: any, ...optionalParams: any[]) => {
  console.info('level:INFO', message, ...optionalParams);
};

const error = (message?: any, ...optionalParams: any[]) => {
  console.error('level:ERROR', message, ...optionalParams);
};

const debug = (message?: any, ...optionalParams: any[]) => {
  console.debug('level:DEBUG', message, ...optionalParams);
};

export const logger = {
  info,
  error,
  debug,
};
