import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '@src/users/dto/create-user.dto';
import { UpdateUserDto } from '@src/users/dto/update-user.dto';
import { UserEntity } from '@src/users/entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = this.userRepo.create({
      ...createUserDto,
    });

    await this.userRepo.save(user);

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
