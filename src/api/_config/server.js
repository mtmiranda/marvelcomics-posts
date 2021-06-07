const Koa = require("koa");
const Router = require("koa-router");
const applyRoutes = require("./routes");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

module.exports = () => {
  applyRoutes(router);

  app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  const port = process.env.PORT || 8080;

  app
    .listen(port)
    .on("listening", () => console.log(`Listening on port ${port}`));
};
