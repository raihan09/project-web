import { AssignquestionService } from './../../core/services/assignquestion.service';
import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
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
  display :boolean;
  user: User = new User("", "",null)
  userget: any;

  password: string;

  locale: string;

  version: string;

  msgs: any[];
  assign:any="";

  constructor(
    private userService: UserService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService,
    private userContextService: UserContextService,
    private assignQuestionService:AssignquestionService,
  ) { }

  ngOnInit() {
 
  

    // this.msgs = "[{ severity: 'info', detail: 'UserName: admin' }, { severity: 'info', detail: 'Password: password' }]";
  }
  findAssign(){
    const resp1 = this.assignQuestionService.getAssignQuestionbyUser(this.userget[0].userId);
    resp1.subscribe((data) => {this.assign = data,this.directLogin(),console.log(this.assign[0])})
  }

  onClickLogin() {
    console.log(this.user)
    const resp = this.userService.login(this.user);
    resp.subscribe((data) => {this.userget = data, console.log("role:" + this.userget[0].role.roleName ),this.findAssign()},
    
    (error)=>{  this.toastService.addSingle("tc",'error','','Invalid User');})


    
  }
 directLogin(){ 
 
  if (this.userget[0].role.roleName === "admin") {
    this.userContextService.setUser(this.userget);
    this.routeStateService.add("Home", '/main/home', null, true);
    return;
  } else if (this.userget[0].role.roleName === "candidate") {
    if(this.assign[0]===undefined){
      this.display=true;
    }

   else {this.userContextService.setUser(this.userget);
    this.routeStateService.add("candidateinit", '/candidateinit', null, true);
    return;
   }
  }
  else {this.toastService.addSingle("tc", 'error', '', 'Invalid user.');
  return;
}
}
close(){
  this.display=false;
}
 }

