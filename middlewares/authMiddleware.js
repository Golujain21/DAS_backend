const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    // console.log(token)
    JWT.verify(token,process.env.JWT_SECRET, (err, decoded) => {
        // console.log(decoded)
      if (err) {
        return res.status(200).send({
          message: "Auth Fialed",
          success: false,
        });
      } else {
        // console.log(decoded.id)
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    console.log(token)
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};