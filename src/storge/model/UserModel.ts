import { Connection } from 'typeorm';
import { User } from '../entity/User';

/**
 * 用户模型（操作数据库）
 */
export default class UserModel {
    private conn: Connection;

    public constructor(conn: Connection) {
        this.conn = conn;
    }

    /**
     * 查找用户
     * @param pageSize 分页大小
     * @param pageIndex 页码
     */
    public async getUsers(pageSize: number, pageIndex: number): Promise<any> {
        return await this.conn.getRepository(User)
            .createQueryBuilder('User')
            .skip(pageSize * (pageIndex - 1))
            .take(pageSize)
            .getMany();
    }

    /**
     * 保存用户
     * @param item 用户实体
     */
    public async SaveUser(item: User) {
        return await this.conn.getRepository(User).save(item);
    }

    /**
     * 根据用户id删除用户
     * @param userId 用户id
     */
    public async DeleteUser(userId: number) {
        return await this.conn.getRepository(User).delete(userId);
    }
}
