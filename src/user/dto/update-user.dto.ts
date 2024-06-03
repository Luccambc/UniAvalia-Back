import { PartialType } from '@nestjs/mapped-types';
import {
  IsBase64,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional({ message: 'Nome is required' })
  @IsString({ message: 'Nome must be a string' })
  nome: string;

  @IsOptional({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsOptional({ message: 'Password is required' })
  @IsStrongPassword()
  password: string;

  @IsOptional({ message: 'Semester is required' })
  @IsString({ message: 'Semester must be a string' })
  semester: string;

  @IsOptional({ message: 'Major is required' })
  @IsString({ message: 'Major must be a string' })
  major: string;

  @IsOptional({ message: 'ProfilePicture is optional' })
  @IsBase64()
  profilePicture: string;
}
