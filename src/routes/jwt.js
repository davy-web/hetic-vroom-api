const jwt = require("jsonwebtoken");

const config = process.env;

const verify_token = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.json({ message: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  }
  catch (err) {
    return res.json({ message: "Invalid Token" });
  }
  return next();
};

module.exports = verify_token;