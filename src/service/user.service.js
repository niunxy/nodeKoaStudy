//进入service层进行数据库操作  src/service/user.service.js
// const { sequelize } = require("../model/user.model");
const User = require("../model/user.model");
class UserService {
    async createUser(user_name, user_pass) {
        console.log("service接受到的数据：", user_name, user_pass);
        // sequelize的增删改查：https://www.sequelize.com.cn/core-concepts/model-querying-basics
        //await :返回值是一个promise对象的值
        const res = await User.create({ user_name, user_pass });
        console.log("创建用户返回的结果", res);
        //async 这里的res会作为一个promise对象返回
        return res.dataValues;
    }
 
    async getUserInfo({ id, user_name, user_pass, is_admin }) {
        // https://www.sequelize.com.cn/core-concepts/model-querying-basics
        const whereOption = {};
        id && Object.assign(whereOption, { id });
        user_name && Object.assign(whereOption, { user_name });
        user_pass && Object.assign(whereOption, { user_pass });
        is_admin && Object.assign(whereOption, { is_admin });
        const res = await User.findOne({
            attributes: ["id", "user_name", "user_pass", "is_admin"],
            where: whereOption,
        });
        console.log("查询用户是否存在的结果", res)
        return res ? res.dataValues : null;
    }
}
 
module.exports = new UserService();       z