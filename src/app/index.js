const Koa = require("koa");
const app = new Koa();
// 路由添加步骤：导入包 实例化对象 编写路由 注册中间件
const userRouter = require("../router/user.route");
const KoaBody = require('koa-body')
app.use(KoaBody()) //注意：要在路由注册之前注册，不要漏了小括号
app.use(userRouter.routes());
 
// 进行统一的错误处理
const errorHandler = require('./errorHandler')
app.on('error', errorHandler)
module.exports = app