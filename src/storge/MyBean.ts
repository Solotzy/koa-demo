import { createConnection, ConnectionOptions } from 'typeorm';
import UserModel from './model/UserModel';
import { User } from './entity/User';

export default class MyBean {
    public static userModel: UserModel;

    static async init() {
        const config = {
            user: {
                name: 'user',
                type: 'mysql',
                host: '127.0.0.1',
                port: '3306',
                username: 'root',
                password: 'root',
                database: 'user_demo',
                timezone: '+08:00',
                entities: [User],
                synchronize: true
            }
        };

        MyBean.userModel = new UserModel(await createConnection(config.user as ConnectionOptions));
    }
}
