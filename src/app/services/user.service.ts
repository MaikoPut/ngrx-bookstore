import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(private db: AngularFireDatabase){}

    createUser(user: User) {
        return this.db.list("/users").update(user.id, user);
    }

    getUserById(id: string): Observable<User>{
        return this.db.object("/users/"+id).map(item => new User(item.id, item.name));
    }
}