import MyBean from '../storge/MyBean';
import { User } from '../storge/entity/User';
import ForntUser from '../interface/ForntUser';

export default class UserService {

    /**
     * 查找用户
     * @param pageSize 分页大小
     * @param pageIndex 页码
     */
    public static async getUsers(pageSize: number = 10, pageIndex: number = 1) {
        const users: User[] = await MyBean.userModel.getUsers(pageSize, pageIndex);
        const result: ForntUser[] = [];
        users.forEach((element) => {
            const forntUser = new ForntUser();
            forntUser.id = element.id;
            forntUser.name = element.name;
            forntUser.age = element.age;
            forntUser.sex = element.sex;
            result.push(forntUser);
        });

        return result;
    }

    /**
     * 创建用户
     * @param forntUser 前端传过来的用户
     */
    public static async CreateUser(forntUser: ForntUser) {
        const user = new User();
        user.name = forntUser.name;
        user.age = forntUser.age;
        user.sex = forntUser.sex;
        await MyBean.userModel.SaveUser(user);
    }

    /**
     * 更新用户信息
     * @param forntUser 前端传过来的用户
     */
    public static async UpdateUser(forntUser: ForntUser) {
        const user = new User();
        user.id = forntUser.id;
        user.name = forntUser.name;
        user.age = forntUser.age;
        user.sex = forntUser.sex;
        await MyBean.userModel.SaveUser(user);
    }

    /**
     * 删除用户
     * @param userId 用户id
     */
    public static async DeleteUser(userId: number) {
        await MyBean.userModel.DeleteUser(userId);
    }
}
