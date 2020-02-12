import { AssignquestionService } from './../../../core/services/assignquestion.service';
import { PackageQuestionService } from './../../../core/services/package-question.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { UserIdleService } from 'angular-user-idle';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { User } from 'src/app/core/models/user.model';
import { notification } from 'src/app/core/models/notification.model';

@Component({
  selector: 'app-candidateinit',
  templateUrl: './candidateinit.component.html',
  styleUrls: ['./candidateinit.component.css']
})
export class CandidateinitComponent implements OnInit {
qpack:any;
  user: any;

  displayNotifications: boolean;

  notifications: notification[];

  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  constructor(private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private themeService: ThemeService,
    private userContextService: UserContextService,
    private menuDataService: MenuDataService,
    private assignQuestionService:AssignquestionService) { 
    this.displayNotifications = false;

  }

  ngOnInit() {

    this.user = this.sessionService.getItem("currentUser");
    if(this.user===null){
      this.router.navigate(['/login']);
    }
    this.notifications = [];
    for (var i = 1; i <= 5; i++) {
      var notificationObj = new notification("Message " + i, new Date(), null)
      this.notifications.push(notificationObj);
    }
    console.log("iduser:"+this.user[0].userId)
    let resp = this.assignQuestionService.getAssignQuestionbyUser(this.user[0].userId);
    resp.subscribe((data) => {this.qpack = data, console.log("paket"+this.qpack.packageName)});
    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  logout() {
    this.userIdle.stopWatching();
    this.routeStateService.removeAll();
    this.userContextService.logout();
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }
  goToCandidateQuestion(id: string) {
    // let resp = this.packService.findpackbyid(id);
    // resp.subscribe((data1) => this.questpack2 = data1);
    this.routeStateService.add("Candidate Question", "/candidateinit/question/"+id,null, false);
  }



}
