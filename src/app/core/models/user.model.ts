export class User {
    constructor() {
        this.userId = null;
        this.userName = null;
        this.password = null;
        this.emailId = null;
        this.birthDate = null;
        this.phone=null;
        this.gender=null;
        this.fullname=null;

    }

    userId: number;
    userName: string;
    password: string;
    emailId: string;
    birthDate: Date;
    phone:string;
    gender:string;
    fullname:string;
}