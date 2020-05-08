const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://susanthaperera.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://susanthaperera.herokuapp.com",
  "process.env.CLIENT_ID": "lg9xhI8eD5PhqN2xSN3py43E758eSIOL",
};
