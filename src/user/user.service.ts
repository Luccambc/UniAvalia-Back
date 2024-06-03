import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private primsa: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.primsa.user.findUnique({
      where: { email: createUserDto.email },
    });
    if (existingUser) throw new ConflictException('Email already exists');
    return await this.primsa.user.create({
      data: {
        ...createUserDto,
      },
    });
  }

  async findOne(id: number) {
    const user = await this.primsa.findUnique({
      where: { id },
    });
    if (!user) throw new NotFoundException('User not found');
    const { password, ...user} = userNoPassword;
    return userNoPassword;
  }

  async findOneByEmail(email: string) {
    const user = await this.primsa.user.findUnique({
      where: { email },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException('User not found');

    return await this.primsa.user.update({
      data: updateUserDto,
      where: { id },
    });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return await this.primsa.user.delete({ where: { id } });
  }
}
