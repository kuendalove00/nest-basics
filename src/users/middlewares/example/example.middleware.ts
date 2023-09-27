/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example Middleware');
    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if(!authorization) throw new HttpException('No Auth Token', HttpStatus.FORBIDDEN);

    if(authorization === 'sdadasdasdadasd') next();
    else
    throw new HttpException('Invalid Authb Token', HttpStatus.FORBIDDEN);
  }
}