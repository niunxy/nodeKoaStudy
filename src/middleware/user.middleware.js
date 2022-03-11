//对接口携带参数进行判断： src/middleware/user.middleware.js
const { getUserInfo } = require("../service/user.service");
const { userFormateError, userAlreadyExited } = require('../constant/errorr.type')
 
const userValidator = async(ctx, next) => {
    const { user_name, password } = ctx.request.body;
    // 解析用户信息格式是否正确
    if (!user_name || !password) {
        console.error("用户名或密码为空--400", ctx.request.body);
        ctx.app.emit("error", userFormateError, ctx)
        return;
    }
    await next();
};
 
const verifyUser = async(ctx, next) => {
    // 判断用户是否已存在
    const { user_name } = ctx.request.body;
    if (await getUserInfo({ user_name })) {
        //注意加await
        console.error("用户名已存在--409", ctx.request.body);
        ctx.app.emit("error", userAlreadyExited, ctx)
        return;
    }
 
    await next();
};
module.exports = {
    userValidator,
    verifyUser,
};