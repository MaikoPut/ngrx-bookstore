export interface IUserCredentials{
    email: string;
    password: string;
    name?: string;
}

export class UserCredentials implements IUserCredentials{
    email: string;
    password: string;
    name?: string;

    constructor(email: string, password: string, name?: string){
        this.email = email;
        this.password = password;
        this.name = name;
    }
}