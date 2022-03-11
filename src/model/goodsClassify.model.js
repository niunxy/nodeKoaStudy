const { DataTypes } = require("sequelize"); //https://www.sequelize.com.cn/core-concepts/model-basics
const { model } = require("../db/sequelize");
const seq = require("../db/sequelize");
const GoodsClassify = seq.define(
    "goods_classify", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        classify_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            comment: "分类名称",
        },
        is_used: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            comment: "上架、下架",
        },
    }
);
 
// GoodsClassify.sync({ force: true }); //force:true 数据库存在User_tables表则强制删除原表，新建
 
module.exports = GoodsClassify