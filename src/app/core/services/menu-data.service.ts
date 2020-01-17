import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Home', Icon: 'fa-home', RouterLink: '/main/home', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Candidates', Icon: 'fa-users', RouterLink: '/main/candidates', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Questions', Icon: 'far fa-file-alt', RouterLink: '/main/departments', Childs: null, IsChildVisible: false
            },

            {
                Label: 'Test Result', Icon: '	far fa-clipboard', RouterLink: null, Childs: [
                    { Label: 'Candidate Result', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Essay Test', RouterLink: null, Childs:null,IsChildVisible:false
                    }
                ], IsChildVisible: false
            }
        ];
    }
}
