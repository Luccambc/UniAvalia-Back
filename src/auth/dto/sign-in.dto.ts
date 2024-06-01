import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class SignInDto {
  @IsNotEmpty({ message: "Email is required" })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: "Password is required" })
  @IsStrongPassword()
  password: string;
}
