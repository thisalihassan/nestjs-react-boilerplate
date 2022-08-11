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

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = this.userRepo.create({
      ...createUserDto,
    });

    await this.userRepo.save(user);

    return user;
  }

  findAll(): Promise<UserEntity[]> {
    const users = this.userRepo.find();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.userRepo.findOneBy({ id });
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
