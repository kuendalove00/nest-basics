/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    /*@Get()
    getUsers() {
        return { username: 'Kuenda', email: 'kuenda@example.com' };
    }*/

    constructor(private userService: UsersService) {
        
    }

    @Get('posts')
    getUsersPosts() {
        return [
            {
                username: 'Kuenda',
                email: 'kuenda@ex.com',
                posts: [
                    {
                        id: 1,
                        title: 'Post 1'
                    },
                    {
                        id: 2,
                        title: 'Post 2'
                    },
                ],
            },
        ];
    }

    @Get('posts/comments')
    getUsesPostsComments() {
        return [
            {
                id: 1,
                title: 'Post 1',
                comments: [],
            },
        ];
    }

    /*@Post()
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body)
        response.send('Created');
    }*/

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData);
        return {};
    }

    /*@Get(':id')
    getUserById(@Param('id') id: string)
    {
        console.log(id);
        return {id}
    }*/

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number)
    {
        console.log(id);
        return {id}
    }

    /*@Get()
    getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean ) {
        console.log(sortDesc);
        return { username: 'Kuenda', email: 'kuenda@example.com' };
    }*/

    @Get()
    getUsers() {
        return this.userService.fetchUsers();
    }
}