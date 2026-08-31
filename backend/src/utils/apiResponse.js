export const successResponse = (res, message = 'Success', data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const errorResponse = (res, message = 'Internal Server Error', error = {}, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: typeof error === 'string' ? { details: error } : error
  });
};
