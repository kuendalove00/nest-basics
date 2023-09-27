/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: 'Kuenda', email: 'kuenda@example.com' },
        { username: 'Cory', email: 'kuenda@example.com' },
        { username: 'Amanda', email: 'kuenda@example.com' },
    ];
    
    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType)
    {
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number)
    {
        //return {id, username: 'Anson', email: 'anson@example.com'}
        return null;
    }
}
