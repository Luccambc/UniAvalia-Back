/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private primsa: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.primsa.user.create({
      data: {
        ...createUserDto,
      },
    });
  }

  async FindUser(email: string) {
    const user = await this.primsa.user.findUnique({
      where: { email },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    const user = await this.FindUser(email);

    if (!user) throw new NotFoundException('User not found');

    return await this.primsa.user.update({
      data: updateUserDto,
      where: { email },
    });
  }

  async remove(email: string) {
    const user = await this.FindUser(email);
    if (!user) throw new NotFoundException('User not found');
    return await this.primsa.user.delete({ where: { email } });
  }
}
