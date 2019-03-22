import * as Router from 'koa-router';
import UserAction from './action/UserAction';

// 通过 /api 定义此路由集合的初始地址，子路由为相对此地址的路径
// v1 代表 api接口的版本
const router = new Router({ prefix: '/api/v1' });

// 定义路径 /demo
const userRouter = new Router({ prefix: '/user' });

// 引入UserAction
const userAction = new UserAction();

// 具体的路由
userRouter.get('/getUsers', userAction.getUsers);
userRouter.post('/createUser', userAction.CreateUser);
userRouter.post('/updateUser', userAction.UpdateUser);
userRouter.post('/deleteUser', userAction.DeleteUser);

// 路由集合
const routerArr: Router[] = [userRouter];
routerArr.forEach((rItem) => {
    router.use(rItem.routes(), rItem.allowedMethods());
});

export default router;
