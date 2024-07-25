import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USERS_REPOSITORY } from './users.providers';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.findAndCount();
  }

  async findOne(id: number) {
    const result = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!result) {
      throw new HttpException('NotFoundException', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const exists = await this.userRepository.findOne({ where: { id } });

    if (!exists) {
      throw new HttpException('NotFoundException', HttpStatus.NOT_FOUND);
    }

    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
