import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParserServ from 'koa-bodyparser';
import * as fs from 'fs';
import * as path from 'path';
import MyBean from './storge/MyBean';

// 初始化数据库连接
MyBean.init();

const app = new Koa();

// 设置请求解析中间件
app.use(bodyParserServ());

// 绑定处理路由
// map area routes in area direcroty
const routes = new Router();
const areaPath = fs.readdirSync(path.resolve(__dirname, 'area'));
areaPath.forEach((area: string) => {
    const define = () => import(`./area/${area}`);
    (async () => {
        const { default: router } = await define();
        routes.use(router.routes(), router.allowedMethods());
    })();
});
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(8387);
