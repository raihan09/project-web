import { AplicantAnswerService } from './../../../core/services/applicant-answer.service';
import { AssignquestionService } from './../../../core/services/assignquestion.service';
import { AppAnswer } from './../../../core/models/appAnswer.model';
import { ApplicantAnswer } from './../../../core/models/applicant-answer.model';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { notification } from 'src/app/core/models/notification.model';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { UserIdleService } from 'angular-user-idle';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { PackageQuestionService } from 'src/app/core/services/package-question.service';
import { PackageService } from 'src/app/core/services/package.service';
import { NgClass } from '@angular/common';
import { ConfirmationService } from 'primeng/api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-starttest',
  templateUrl: './starttest.component.html',
  styleUrls: ['./starttest.component.css'],
  providers: [ConfirmationService]
})
export class StarttestComponent implements OnInit,OnDestroy {
  ngOnDestroy(){
    let c = [];
    c.push(this.hours)
    c.push(this.minutes)
    c.push(this.seconds)
    localStorage.setItem("soall",JSON.stringify(c));

  }
  time:any;
  msgs: Message[] = [];
  display1:any;
  simpan=[];
  selectedValue:any;
  header:any;
  qpack:any;
  user: any;
indeks=0;
gender="asd";
appAnswer = new AppAnswer("belumadajawaban","belumadajawaban");
aplicantAnswer:ApplicantAnswer = new ApplicantAnswer(this.header,this.qpack,this.appAnswer)
  selectedAnswer: string[] = [];
  displayNotifications: boolean;

  notifications: notification[];

  display: boolean = false;
  id: any;
  packs: any;
  highlight: number = 0;
  assign: Object;
  question:any;
  seconds: number =0;
  minutes: number = 0;
  hours: number = 0;
  floorhour: number = 0;
  interval;
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
    private packageService:PackageService ,
    private applicantAnswerService:AplicantAnswerService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private assignQuestionService :AssignquestionService) {
    this.displayNotifications = false;

  }
  
  ngOnInit() {
    let b = localStorage.getItem("soall"); 
    let c = JSON.parse(b);
    console.log("Ini "+c); 
    this.user = this.sessionService.getItem("currentUser");
console.log("userassad:"+this.user)
    if(this.user===null){
      this.router.navigate(['/login']);
    }
    this.startTimer();
    console.log(this.gender)
    this.id = this.routes.snapshot.paramMap.get('id');
    console.log("idpack"+this.id)
    this.findPackQuestbyIdpack(this.id)
    this.findPackbyId(this.id)
    console.log(this.qpack)

console.log("userid"+this.user[0].userId)
    this.findHeaderByid(this.user[0].userId)
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
    let resp = this.assignQuestionService.getAssignQuestionbyUser(this.user[0].userId);
    resp.subscribe((data) => {this.assign = data, console.log(this.assign)});
  }
  findPackbyId(idd) {
    let resp = this.packageService.findpackbyid(idd);
  resp.subscribe((data) => {this.packs = data,this.time=this.packs.amountOfTime,this.countTIme()});
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
  findPackQuestbyIdpack(idd) {
    let resp = this.questionPackService.findpackQuestionbyidPack(idd);
  resp.subscribe((data) => {this.qpack = data,console.log('type:'+ this.qpack.question.questionTypeTitle)});
  }
  findHeaderByid(idd) {
    let resp = this.applicantAnswerService.findHeaderbyid(idd);
  resp.subscribe((data) => {this.header = data,console.log("header:"+this.header.applicantAnswerId)});
  }
  save2jawaban(){
    this.appAnswer = new AppAnswer(this.selectedAnswer[0],this.selectedAnswer[1])
  }
  nextQuest(i){
    this.indeks ++;
    console.log(i)
    console.log("indeks ke-"+this.indeks);
    this.aplicantAnswer = new ApplicantAnswer(this.header,this.qpack[i],this.appAnswer);

      if(this.simpan[this.indeks] != null){
        this.aplicantAnswer = this.simpan[this.indeks];

      }


    else{
      this.simpan.push(this.aplicantAnswer);
      

      this.appAnswer= new AppAnswer("asd","")
      this.aplicantAnswer = new ApplicantAnswer(this.header.applicantAnswerId,this.qpack[i],this.appAnswer);
    }

    console.log(this.simpan)
  
}
nextQuest1(i){
  console.log("jumlah"+this.selectedAnswer.length)
  if(this.selectedAnswer.length >2){
    this.toastService.addSingle("tcu",'error','',"Pilih Maksimal 2 Jawaban")
    console.log("sini")
  }
  else{

  this.indeks ++;
  this.save2jawaban();
  console.log(i)
  console.log("indeks ke-"+this.indeks);
  console.log("situassadsaasasdsad")
  this.aplicantAnswer = new ApplicantAnswer(this.header,this.qpack[i],this.appAnswer);

    if(this.simpan[this.indeks] != null){
      this.aplicantAnswer = this.simpan[this.indeks];

    }


  else{
    this.simpan.push(this.aplicantAnswer);
    this.appAnswer= new AppAnswer("asd","")
    this.aplicantAnswer = new ApplicantAnswer(this.header.applicantAnswerId,this.qpack[i],this.appAnswer);
  }

  console.log(this.simpan)
  }
}
  prevQuest(i){
    this.indeks--;
    console.log("indeks ke-"+this.indeks);
    console.log(this.simpan);

    this.aplicantAnswer = this.simpan[this.indeks];


  }
  numberQuestion(i){
    this.indeks =i;
    console.log("ini "+i);

  }
  postAnswer() {
    let resp = this.applicantAnswerService.postApplicantanswer(this.simpan);
  resp.subscribe((data) => console.log(this.simpan));
  }
  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed? You cant change your answer after submit it',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.aplicantAnswer = new ApplicantAnswer(this.header,this.qpack[this.indeks],this.appAnswer);
          this.simpan.push(this.aplicantAnswer);

          this.postAnswer();


        if(this.assign[1]!=null){

          this.toastService.addSingle("tt",'success','','Jawaban tersimpan');
        }
        else{ this.display1=true}
        },
        reject: () => {

        }
    });
}
reload(){
  location.href="/login"
}
reload1(){
  location.href="/candidateinit"
}
startTimer() {
  this.interval = setInterval(() => {
    if(this.seconds == 0) {
      this.minutes--;
    }
    if(this.minutes == -1){
      this.hours--;
      this.minutes = 59;
    }
    if(this.seconds > 0) {
      this.seconds--;
    } else {
      this.seconds = 59;
    }
    if(this.hours < 0){
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.pauseTimer();
    }
  },1000)
}//end startTimer

pauseTimer() {
  clearInterval(this.interval);
  this.aplicantAnswer = new ApplicantAnswer(this.header,this.qpack[this.indeks],this.appAnswer);
  this.simpan.push(this.aplicantAnswer);

  this.postAnswer();
  if(this.assign[1]!=null){

    this.toastService.addSingle("tt",'success','','Waktu habis, Jawaban sudah direkam');
  }
  else{ this.display1=true}
}
countTIme(){
  this.minutes= this.time%60;
  this.floorhour=this.time/60;
  this.hours = Math.floor(this.floorhour);
  }
}

