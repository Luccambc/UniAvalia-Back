import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
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

  @ApiBearerAuth()
  @Get()
  async findOneById(@GetUser() tokenPayload: TokenPayload) {
    return await this.userService.findOneById(tokenPayload.userId);
  }

  @ApiBearerAuth()
  @Patch()
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() tokenPayload: TokenPayload,
  ) {
    return await this.userService.update(tokenPayload.userId, updateUserDto);
  }

  @ApiBearerAuth()
  @Delete()
  async remove(@GetUser() tokenPayload: TokenPayload) {
    return await this.userService.remove(tokenPayload.userId);
  }
}
