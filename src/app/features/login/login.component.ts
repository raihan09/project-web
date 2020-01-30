import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { User } from 'src/app/core/models/user.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { TranslateService } from '@ngx-translate/core';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  locale: string;

  version: string;

  msgs: any[];

  constructor(
    private userService: UserDataService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService,
    private userContextService: UserContextService
  ) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";

    // this.msgs = "[{ severity: 'info', detail: 'UserName: admin' }, { severity: 'info', detail: 'Password: password' }]";
  }

  onClickLogin() {
    let user: User = this.userService.getUserByUserNameAndPassword(this.userName, this.password);
    if (user) {
      this.userContextService.setUser(user);
      this.routeStateService.add("Home", '/main/home', null, true);
      return;
    }
    this.toastService.addSingle("tc",'error', '', 'Invalid user.');
    return;
  }

 
}
