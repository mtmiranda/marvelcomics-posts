const controllers = require("./controllers");

module.exports = (router) => {
  router.post(
    "https://agile-beach-75452.herokuapp.com/v1/api/auth",
    controllers.auth
  );
};
