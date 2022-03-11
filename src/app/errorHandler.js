//项目整体配置错误处理： src/app/errorHandler.js
module.exports = {
    userFormateError: {
        code: "10001",
        message: "用户名或密码为空",
        result: "",
    },
    userAlreadyExited: {
        code: "10002",
        message: `用户名已存在`,
        result: "",
    },
};