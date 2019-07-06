module.exports = corsMiddleware;

function corsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //from any domen
  res.header('Access-Control-Allow-Headers', 'Content-Type'); //wjich headers
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  next();
}
