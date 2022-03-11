/*user.js*/
const router = require('koa-router')();

module.exports = (app) => {
    /**表单页面，提交地址为/user/login */
    router.get('/user', async (ctx, next)=>{
        ctx.body = `
            <form action="/user/login" method="post">
                <input name="name" type="text" placeholder="请输入用户名:joyitsai">
                <br/>
                <input name="password" type="password" placeholder="请输入密码：123456">
                <br/>
                <button>GoGo</button>
            </form>
        `
    });

    /**router.post()配置post路由 */
    router.post('/user/login', async (ctx, next)=>{
        /**ctx.request.body为解析的post数据对象 */
        //{name:'joyitsai', password:'123456'}
        console.log(ctx.request.body);
        let {name, password} = ctx.request.body; 
        if(name == 'joyitsai' && password=='123456'){
            ctx.body = `Hello ${name}`;
        }else{
            ctx.body = '账号信息错误'
        }
    })
    app.use(router.routes()).use(router.allowedMethods());
}