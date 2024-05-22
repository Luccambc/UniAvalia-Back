/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import {
  IsBase64,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional({ message: 'Nome is optional' })
  @IsString({ message: 'Nome must be a string' })
  nome?: string;

  @IsOptional({ message: 'Email is optional' })
  @IsEmail()
  email?: string;

  @IsOptional({ message: 'Password is optional' })
  @IsStrongPassword()
  password?: string;

  @IsOptional({ message: 'Major is optional' })
  @IsString({ message: 'Major must be a string' })
  major?: string;

  @IsOptional({ message: 'Semester is optional' })
  @IsNumber()
  semester?: number;

  @IsOptional({ message: 'ProfilePicture is optional' })
  @IsBase64()
  profilePicture?: string;
}
