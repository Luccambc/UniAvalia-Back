import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TokenPayload } from 'src/types/tokenPayload';

export const GetUser = createParamDecorator(
  (data: keyof TokenPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return data ? request.user[data] : request.user;
  },
);
