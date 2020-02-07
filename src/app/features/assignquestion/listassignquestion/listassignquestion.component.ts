import { AddassignquestionComponent } from './../addassignquestion/addassignquestion.component';
import { AssignquestionService } from './../../../core/services/assignquestion.service';
import { AssignQuestion } from './../../../core/models/assignquestion.model';
import { PackageService } from 'src/app/core/services/package.service';
import { PackageQuestionService } from 'src/app/core/services/package-question.service';
import { QuestionService } from './../../../core/services/question.service';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/core/models/profile.model';
import { SelectItem, MessageService } from 'primeng/api';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listassignquestion',
  templateUrl: './listassignquestion.component.html',
  styleUrls: ['./listassignquestion.component.css']
})
export class ListassignquestionComponent implements OnInit {
  forupdate:any = "";
  assignquestion:AssignQuestion;
  columns: any[];
  profile: Profile[];
  assignpack:any;
display:any;
display2:any;
  pageSize: number;
  cities1: SelectItem[];
  department:any;
questionpack:any;
questionpack2:any;
candidate:any;
candidate2:any;
  idqp: any;
  message: Object;
  baru: Object;
  
  constructor(
    private routeStateService: RouteStateService,
    private assignquestService:AssignquestionService,
    private candidateService: UserService,
    private packageService :PackageService,
    private routes : ActivatedRoute,
     private toastService: ToastService,
     private router: Router,
     private messageService: MessageService){ }

  ngOnInit() {
    let resp = this.assignquestService.getAllAssignQuestion();
    resp.subscribe((data) => this.assignpack = data);
    this.pageSize = 10;
   
    this.columns = [
      { field: 'user',field2:'profile',field3:'profileName', header:'Candidate Name' },
      { field: 'pack',field2:'packageName',field3:'',header: 'Question Pack' }
    ];
    this.cities1 = [
      {label:'user', value:null},
      {label:'Name', value:'a'},
      {label:'Email', value:'b'}
  ];
  let resp2 = this.packageService.getAllpack();
resp2.subscribe((data) => this.questionpack = data);
let resp1 = this.candidateService.getAllUser();
resp1.subscribe((data) => this.candidate = data);
    // this.profile = this.profileService.getProfileList();
  }

  back() {
    this.routeStateService.loadPrevious();
  }
  showDialog() {
    this.display = true;
}
showDialog2(id) {
  this.display2 = true;
  let resp3 = this.assignquestService.findAssignQuestionbyid(id);
  resp3.subscribe((data) => {this.forupdate = data,console.log(this.forupdate.pack)});

}
goTonewassignquestion(department: number) {
  this.routeStateService.add("New Assignquestion", "/main/assignquestion/newassignquestion", department, false);
}
getQuestion(){
  let resp1 = this.candidateService.getAllUser();
  resp1.subscribe((data) => this.candidate = data);
}
DeleteAssinQuestion(){
  this.messageService.clear('cc');
    let resp = this.assignquestService.deleteAssignQuestion(this.idqp);
    resp.subscribe((data) => { this.toastService.addSingle("ttt",'success','','Question Deleted');},
    (error)=>{  this.toastService.addSingle("tt",'error','',error.error);});
   // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
  
  
}
showConfirm() {
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure to add?', detail:'Confirm to proceed'});
}
showConfirm2(idaw) {
  this.messageService.clear();
  this.messageService.add({key: 'cc', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});
this.idqp=idaw;
console.log(idaw)
}

showConfirm3(idaw) {
  this.messageService.clear();
  this.messageService.add({key: 'cu', sticky: true, severity:'warn', summary:'Are you sure to update?', detail:'Confirm to proceed'});
this.idqp=idaw;
}

onConfirm() {
  this.messageService.clear('c');
 this.assignquestion = new AssignQuestion ( this.candidate2,this.questionpack2, 'active');
 console.log(this.candidate2)
 console.log(this.questionpack2)
  let list:Array<any> = [this.assignquestion];
  console.log(list)
  const resp = this.assignquestService.addAssignQuestion(list);
  resp.subscribe((data) => {this.toastService.addSingle("tct",'success','','Assign Question Added')},
  (error)=>{  this.toastService.addSingle("tc",'error','',error.error);});
 
 // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
 

}
onConfirmUpdate() {
  console.log("Baru:"+this.forupdate)

  const resp = this.assignquestService.updateAssignQuestion(this.forupdate);
  resp.subscribe((data) => {this.toastService.addSingle("tcut",'success','','Assign Question Updated')},
  (error)=>{  this.toastService.addSingle("tcu",'error','',error.error);});
 
 // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
 

}

onReject() {
  this.messageService.clear('c');
  this.messageService.clear('cc');
}
reload(){
  location.href="main/assignquestion"
}
}


