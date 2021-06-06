const controllers = require("./controllers");

module.exports = (router) => {
  router.post(
    "https://marvelcomics-posts.herokuapp.com/v1/api/user",
    controllers.create
  );
};
