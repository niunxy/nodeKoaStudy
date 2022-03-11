//进入controller层进行相关处理  src/controller/user.controller.js
const { createUser, getUserInfo } = require("../service/user.service");
class UserController {
    async register(ctx, next) {
        // 获取数据
        console.log("从接口获取到的数据", ctx.request.body); //如果遇到ctx.request.body有值，但是里面参数的值是undefined，检查请求头的content-type是不是application/json
        const { user_name, password } = ctx.request.body;
        // 操作数据
        const res = await createUser(user_name, password);
        console.log(res);
        // 返回结果
 
        ctx.body = {
            code: 0,
            message: "用户注册成功",
            result: {
                id: res.id,
                user_name: res.user_name,
            },
        };
    }
    async login(ctx, next) {
        ctx.body = "用户登录成功";
    }
}
module.exports = new UserController();