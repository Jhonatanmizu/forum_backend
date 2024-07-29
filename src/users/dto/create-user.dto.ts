import { UserRole } from '../enums';

export class CreateUserDto {
  name: string;
  identity: string;
  birthdate: Date;
  phone: string;
  role: UserRole;
}
