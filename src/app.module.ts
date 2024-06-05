import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaService],
  imports: [AuthModule],
})
export class AppModule {}
