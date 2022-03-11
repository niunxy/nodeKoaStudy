//拆分数据库连接方法: src/db/sequelize.js
const { Sequelize } = require("sequelize");
 
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB,
} = require("../config/config.default");
 
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: "mysql",
});
 
// 测试数据库连接
// seq
//     .authenticate()
//     .then(() => {
//         console.log("数据库链接成功");
//     })
//     .catch((err) => {
//         console.log("数据库链接失败", err);
//     });
module.exports = seq;