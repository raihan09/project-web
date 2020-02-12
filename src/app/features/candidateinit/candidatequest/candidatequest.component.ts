import { QuestionService } from './../../../core/services/question.service';
import { PackageService } from 'src/app/core/services/package.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { notification } from 'src/app/core/models/notification.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { UserIdleService } from 'angular-user-idle';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { PackageQuestionService } from 'src/app/core/services/package-question.service';

@Component({
  selector: 'app-candidatequest',
  templateUrl: './candidatequest.component.html',
  styleUrls: ['./candidatequest.component.css']
})
export class CandidatequestComponent implements OnInit {
  qpack:any;
  user: any;

  displayNotifications: boolean;

  notifications: notification[];

  display: boolean = false;
  id: any;
  pack: any="";

  showDialog() {
      this.display = true;
  }
  constructor(private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private userContextService: UserContextService,
    private menuDataService: MenuDataService,
    private questionPackService:PackageQuestionService,
    private routes : ActivatedRoute,
    private packageService:PackageService ) { 
    this.displayNotifications = false;

  }

  ngOnInit() {
    this.id = this.routes.snapshot.paramMap.get('id');
    console.log(this.id)
    this.findPackbyId(this.id)
    console.log(this.qpack)
    this.user = this.sessionService.getItem("currentUser");
    if(this.user===null){
      this.router.navigate(['/login']);
    }
    this.notifications = [];
    for (var i = 1; i <= 5; i++) {
      var notificationObj = new notification("Message " + i, new Date(), null)
      this.notifications.push(notificationObj);
    }
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
  findPackbyId(idd) {
    let resp = this.packageService.findpackbyid(idd);
  resp.subscribe((data) => {this.pack = data,console.log(this.pack)});
  }
  goToStartTest(id: string) {
    // let resp = this.packService.findpackbyid(id);
    // resp.subscribe((data1) => this.questpack2 = data1);
    this.routeStateService.add("Candidate Question", "/candidateinit/starttest/"+id,null, false);
  }
}
