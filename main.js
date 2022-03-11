const Koa = require("koa");
const router = require("koa-router")();
const loginRouter = require('./src/router/user.route.js');
const app = new Koa();

router.get("/news", (ctx, next) => {
  ctx.body = "新闻page";
});
app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods());
loginRouter(app);
app.listen(3000);
