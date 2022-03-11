//抽离model层定义表对象 src/model/user.model.user.js
const { DataTypes } = require("sequelize"); //https://www.sequelize.com.cn/core-concepts/model-basics
// const { model } = require("../db/sequelize");
const seq = require("../db/sequelize");
// 创建模型   seq.define('User',)会自动生成复数形式表名users表
const User = seq.define(
    "User_table", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            comment: "用户名，唯一",
        },
        user_pass: {
            type: DataTypes.CHAR,
            allowNull: false,
            unique: false,
            comment: "用户密码",
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: false,
            defaultValue: 0,
            comment: "用户类型标志，0 普通用户  1管理员",
        },
    }, {
        timestamps: false, //不会自动生成 createdAt和updatedAt字段
    }
);
 
User.sync({ force: true }); //force:true 数据库存在User_tables表则强制删除原表，新建
 
module.exports = User