//goods.service
const Goods = require("../model/goods.model");
const GoodsClassify = require("../model/goodsClassify.model");
class GoodsService{

    async findGoods(pageNum, pageSize) {
            try {
                const count = await Goods.count();
                const offset = (pageNum - 1) * pageSize;
                const row = await Goods.findAll({
                    offset: offset,
                    limit: Number(pageSize),
                    include: {
                        attributes: ["classify_name"],
                        model: GoodsClassify,
                        as: "aa"
                    },
                });
                let returnObj = await listRes(pageNum, pageSize, count);
                returnObj.list = row;
                return returnObj;
            } catch (error) {
                console.error(error);
            }
        }
    async listRes(pageNum, pageSize, count, row) {
        const lastPage = Math.ceil(count / pageSize);
        let prePage = null;
        if (pageNum > 1) {
            prePage = pageNum - 1;
        }
        return {
            lastPage,
            prePage,
            pageNum,
            pageSize,
            total: count
        };
    };
}
module.exports = new GoodsService();