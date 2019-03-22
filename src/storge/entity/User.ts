import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * 数据库的用户模型
 */
@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    /**
     * 姓名
     */
    @Column('varchar', { length: 50 })
    name: string | undefined;

    /**
     * 年龄
     */
    @Column('int')
    age: number | undefined;

    /**
     * 性别
     */
    @Column('tinyint')
    sex: boolean | undefined;

    /**
     * 创建时间
     */
    @Column('datetime', { nullable: false, name: 'create_on' })
    createOn: Date | undefined;
}
