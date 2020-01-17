import { Profile } from '../../core/models/profile';
import { Role } from '../../core/models/role';
import { Injectable } from '@angular/core';
import { user } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root',
})
/**
 * employee service
 */


export class UserDataService {
    getUserList(): user[] {
        return [{userId : 'aaa', username: 'aaa', password: 'aaa', AS: 'aaa' },
        {userId : 'aaa', username: 'aaa', password: 'aaa', AS: 'aaa' },
        {userId : 'aaa', username: 'aaa', password: 'aaa', AS: 'aaa' },
        {userId : 'aaa', username: 'aaa', password: 'aaa', AS: 'aaa' },
        {userId : 'aaa', username: 'aaa', password: 'aaa', AS: 'aaa' }

        ];
    }
}
