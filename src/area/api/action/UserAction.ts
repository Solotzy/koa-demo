import * as Router from 'koa-router';
import UserService from '../../../service/UserService';
import ForntUser from '../../../interface/ForntUser';
import { isUndefined, isNumber } from 'util';
import MyResponse from '../../../interface/MyResponse';

/**
 * User API
 */
export default class UserAction {
    /**
     * 获取用户列表
     */
    public async getUsers(ctx: Router.IRouterContext, next: () => Promise<any>) {
        const queryParams = ctx.request.query;
        const pageSize = queryParams.pageSize;
        const pageIndex = queryParams.pageIndex;
        const result: any = await UserService.getUsers(pageSize, pageIndex);

        ctx.body = new MyResponse(true, result, '获取成功');
    }

    /**
     * 新增用户
     */
    public async CreateUser(ctx: Router.IRouterContext, next: () => Promise<any>) {
        const postData = ctx.request.body;
        const forntUser = new ForntUser();
        forntUser.name = postData.name;
        forntUser.age = postData.age;
        forntUser.sex = postData.sex;
        const result: any = await UserService.CreateUser(forntUser);

        ctx.body = new MyResponse(true, result, '创建成功');
    }

    /**
     * 更新用户信息
     */
    public async UpdateUser(ctx: Router.IRouterContext, next: () => Promise<any>) {
        const postData = ctx.request.body;
        const userId = postData.id;
        if (isUndefined(userId) || !isNumber(userId)) {
            ctx.body = new MyResponse(false, null, 'userId is null');

            return;
        }
        const forntUser = new ForntUser();
        forntUser.id = userId;
        forntUser.name = postData.name;
        forntUser.age = postData.age;
        forntUser.sex = postData.sex;
        const result: any = await UserService.UpdateUser(forntUser);

        ctx.body = new MyResponse(true, result, '更新成功');
    }

    /**
     * 删除用户
     */
    public async DeleteUser(ctx: Router.IRouterContext, next: () => Promise<any>) {
        const postData = ctx.request.body;
        const userId = postData.userId;
        const result: any = await UserService.DeleteUser(userId);

        ctx.body = new MyResponse(true, result, '删除成功');
    }

}
