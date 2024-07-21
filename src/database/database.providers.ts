import { DataSource } from 'typeorm';

export const DATA_SOURCE_PROVIDER = 'DATA_SOURCE';

const SYNCHRONIZE = process.env.ENVIRONMENT !== 'production';

export const databaseProviders = [
  {
    provide: DATA_SOURCE_PROVIDER,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mariadb',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: SYNCHRONIZE,
      });

      return dataSource.initialize();
    },
  },
];
