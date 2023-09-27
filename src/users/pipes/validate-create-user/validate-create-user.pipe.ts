/* eslint-disable prettier/prettier */
import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside Pipe');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if(isNaN(parseAgeToInt))
    {
      console.log(`${value.age} is not anumber!`);
      throw new HttpException('invalid Data Type for property age, Expected number', HttpStatus.BAD_REQUEST);
    }
      
    return {...value, age:parseAgeToInt};
    

    return value;
  }
}
