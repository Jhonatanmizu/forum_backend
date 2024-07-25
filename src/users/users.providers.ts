import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { DATA_SOURCE_PROVIDER } from '@/database/database.providers';

export const USERS_REPOSITORY = 'USER_REPOSITORY';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE_PROVIDER],
  },
];
