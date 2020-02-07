import { Profile } from 'src/app/core/models/profile.model';
export class User {
    constructor(
        private username:any,
        private password:any,
        private profile:Profile) {


    }

}