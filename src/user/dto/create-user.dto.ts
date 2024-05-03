/* eslint-disable prettier/prettier */
import {
  IsBase64,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword()
  password: string;

  @IsNotEmpty({ message: 'Semester is required' })
  @IsString({ message: 'Semester must be a string' })
  semester: string;

  @IsNotEmpty({ message: 'Major is required' })
  @IsString({ message: 'Major must be a string' })
  major: string;

  @IsOptional({ message: 'ProfilePicture is optional' })
  @IsBase64()
  profilePicture: string;
}
