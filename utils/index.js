function response_200(data) {
  return {
    code: 200,
    data: data,
    message: "success",
  };
}

module.exports = {
  response_200,
};
