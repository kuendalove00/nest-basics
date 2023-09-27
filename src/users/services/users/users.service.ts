import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUsers = [{ username: 'Kuenda', email: 'kuenda@example.com' }];
    
    fetchUsers() {
        return this.fakeUsers;
    }
}
