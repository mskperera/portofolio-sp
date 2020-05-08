const routes = require("next-routes");

module.exports = routes()
  .add("portfolioNew", "/portfolios/new")
  .add("test", "/test/:id")
  .add("blogeditor", "/blogs/new")
  .add("portfolioEdit", "/portfolios/:id/edit");

//https://github.com/fridays/next-routes
