import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

dotenv.config();

export const getEntities = (): string[] => {
    return process.env.NODE_ENV === 'migration' || process.env.NODE_ENV === 'seed' ?
        ['src/**/*.entity.ts'] : ['dist/**/*.entity.js'];
}

export const getMigrations = (): string[] => {
    return process.env.NODE_ENV === 'migration' || process.env.NODE_ENV === 'seed' ?
        ['database/migrations/*.ts'] : [];
}

export const getExportDefault = () => {
    return process.env.NODE_ENV === 'seed' ?
        ormConfig : new DataSource(ormConfig);
}

export const ormConfig: MysqlConnectionOptions & { seeds: string[] } = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_NAME,
    entities: getEntities(),
    migrations: getMigrations(),
    seeds: ['database/seeds/*.seed.ts']
}

export default getExportDefault();
