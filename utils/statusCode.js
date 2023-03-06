const statusCode = (status, message, data) => {
  let response;

  if (status === 1) {
    response = {
      status: 1,
      message,
      data,
    };
    return response;
  }
  if (status === 0) {
    response = {
      status: 0,
      message,
    };
    return response;
  }
};

module.exports = { statusCode };
