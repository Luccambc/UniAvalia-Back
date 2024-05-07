/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { GetUser } from 'src/customDecorators/getUser';
import { Public } from 'src/customDecorators/public';
import { TokenPayload } from 'src/types/tokenPayload';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findOne(@GetUser() tokenPayload: TokenPayload) {
    return await this.userService.findOne(tokenPayload.userId);
  }

  @Patch()
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() tokenPayload: TokenPayload,
  ) {
    return await this.userService.update(tokenPayload.userId, updateUserDto);
  }

  @Delete()
  async remove(@GetUser() tokenPayload: TokenPayload) {
    return await this.userService.remove(tokenPayload.userId);
  }
}
