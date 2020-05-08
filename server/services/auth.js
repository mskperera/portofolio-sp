const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const nameSpace = process.env.NAMESPACE; //"http://localhost:3000/";
//MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true, // Default Value
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: "https://dev-xybc8eic.auth0.com/.well-known/jwks.json",
  }),

  audience: "lg9xhI8eD5PhqN2xSN3py43E758eSIOL", //clientID
  issuer: "https://dev-xybc8eic.auth0.com/", //domain
  algorithms: ["RS256"],
});

exports.checkRole = (role) => {
  return (req, res, next) => {
    const user = req.user;
    if (user && user[nameSpace + "/role"] === role) {
      next();
    } else {
      return res.status(401).send({
        title: "Not Authorized",
        detail: "You are not authroized to access this data",
      });
    }
  };
};

// //MIDDLEWARE
// exports.checkJWT = function (req, res, next) {
//   const isValidToken = true;

//   if (isValidToken) {
//     req.user = {
//       name: "sp",
//       lastName: "Jerga",
//     };
//     next();
//   } else {
//     return res.status(401).send({
//       title: "Not Authorized",
//       detail: "Please login in order to get a data",
//     });
//   }
// };
