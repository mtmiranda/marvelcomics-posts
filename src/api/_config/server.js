const Koa = require("koa");
const Router = require("koa-router");
const applyRoutes = require("./routes");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

const allowlist = ["https://marvelcomics-posts.herokuapp.com"];

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;

  let isDomainAllowed = allowlist.indexOf(req.header("Origin")) !== -1;
  let isExtensionAllowed = req.path.endsWith(".jpg");

  if (isDomainAllowed && isExtensionAllowed) {
    // Enable CORS for this request
    corsOptions = { origin: true };
  } else {
    // Disable CORS for this request
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

module.exports = () => {
  applyRoutes(router);

  app
    .use(cors(corsOptionsDelegate))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  const port = process.env.PORT || 8080;

  app
    .listen(port)
    .on("listening", () => console.log(`Listening on port ${port}`));
};
