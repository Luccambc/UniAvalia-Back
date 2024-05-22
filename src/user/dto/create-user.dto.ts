/* eslint-disable prettier/prettier */
import {
  IsBase64,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword()
  password: string;

  @IsNotEmpty({ message: 'Major is required' })
  @IsString({ message: 'Major must be a string' })
  major: string;

  @IsNotEmpty({ message: 'Semester is required' })
  @IsNumber()
  semester: number;

  @IsOptional({ message: 'ProfilePicture is optional' })
  @IsBase64()
  profilePicture?: string;
}
