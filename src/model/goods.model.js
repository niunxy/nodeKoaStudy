const { DataTypes } = require("sequelize"); //https://www.sequelize.com.cn/core-concepts/model-basics
// const { model } = require("../db/sequelize");
const seq = require("../db/sequelize");
const GoodsClassify = require("../model/goodsClassify.model"); //引入GoodsClassify  model
 
const Goods = seq.define(
    "Goods_table", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        goods_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            comment: "商品名称",
        },
        classifyId: {
            type: DataTypes.CHAR,
            allowNull: true,
            unique: false,
            comment: "商品分类名称",
        },
        goods_price: {
            type: DataTypes.CHAR,
            allowNull: false,
            unique: false,
            comment: "商品价格",
        },
        goods_num: {
            type: DataTypes.CHAR,
            allowNull: false,
            unique: false,
            defaultValue: 0,
            comment: "商品数量",
        },
        goods_img: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            defaultValue: 0,
            comment: "商品图片",
        },
        is_used: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            comment: "上架、下架",
        },
    }, {
        timestamps: false, //不会自动生成 createdAt和updatedAt字段
    }
);
 
 
Goods.belongsTo(GoodsClassify, { foreignKey: 'classifyId', targetKey: 'id', as: "aa" }) //两个表相互关联 foreignKey 进行关联的字段  targetKey：被关联表的相关字段  as:取别名
module.exports = Goods