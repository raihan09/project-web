import { QuestionPackSearh } from './../../../core/models/searchqpack.model';
import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { AplicantAnswerService } from 'src/app/core/services/applicant-answer.service';

@Component({
  selector: 'app-applicant-answer',
  templateUrl: './applicant-answer.component.html',
  styleUrls: ['./applicant-answer.component.css']
})
export class ApplicantAnswerComponent implements OnInit {

  columns: any[];
  all: any;
display: any;
display2: any;
  pageSize: number;
  cities1: SelectItem[];
  department: any;
questionpack: any;
questionpack2: any;
candidate: any;
candidate2: any;
  idqp: any;
  message: Object;
  baru: Object;
  name: any;
  finds:QuestionPackSearh;
  
  constructor(
    private routeStateService: RouteStateService,
    private routes : ActivatedRoute,
     private toastService: ToastService,
     private router: Router,
     private messageService: MessageService,
     private applicantanswer : AplicantAnswerService){ }

  ngOnInit() {
    let resp = this.applicantanswer.getAllaplicationAnswer();
    resp.subscribe((data) => this.all = data);
    this.pageSize = 10;
   
    this.columns = [
      { field: 'user', field2: 'profile', field3: 'profileName', header: 'Candidate Name' },
      { field: 'user', field2: 'profile', field3: 'email', header: 'Candidate Email' },
      { field: 'user', field2: 'profile', field3: 'phone', header: 'Candidate Phone' },
      { field: 'totalPoints', field2: null, field3: null, header: 'Total Points' },
      { field: 'status', field2: null, field3: null, header: 'Status' }
    ];
    this.cities1 = [
      {label: 'user', value: null},
      {label: 'Name', value: 'a'},
      {label: 'Email', value: 'b'}
  ];

    // this.profile = this.profileService.getProfileList();
  }

  back() {
    this.routeStateService.loadPrevious();
//   }
//   showDialog() {
//     this.display = true;
//     let resp2 = this.packageService.getAllpack();
//   resp2.subscribe((data) => this.questionpack = data);
//   let resp1 = this.candidateService.getAllUser();
//   resp1.subscribe((data) => this.candidate = data);
// }
// goTonewassignquestion(department: number) {
//   this.routeStateService.add("New Assignquestion", "/main/assignquestion/newassignquestion", department, false);
// }
// getQuestion(){
//   let resp1 = this.candidateService.getAllUser();
//   resp1.subscribe((data) => this.candidate = data);
// }
// DeleteAssinQuestion(){
//   this.messageService.clear('cc');
//     let resp = this.assignquestService.deleteAssignQuestion(this.idqp);
//     resp.subscribe((data) => console.log(data));
//     console.log(this.idqp)
    
//    // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
//    this.toastService.addSingle("tt",'success','','Question Deleted');
// }
// showConfirm() {
//   this.messageService.clear();
//   this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure to add?', detail:'Confirm to proceed'});
// }
// showConfirm2(idaw) {
//   this.messageService.clear();
//   this.messageService.add({key: 'cc', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});
// this.idqp=idaw;
// console.log(idaw)
// }

// onConfirm() {
//   this.messageService.clear('c');
//  this.assignquestion = new AssignQuestion ( this.candidate2,this.questionpack2, 'active');
//  console.log(this.candidate2)
//  console.log(this.questionpack2)
//   let list:Array<any> = [this.assignquestion];
//   console.log(list)
//   const resp = this.assignquestService.addAssignQuestion(list);
//   resp.subscribe((data) => console.log(data));
//   this.message = new Object ()
//  // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
//  this.toastService.addSingle("tc",'success','','Assign Question Added');

// }

// onReject() {
//   this.messageService.clear('c');
//   this.messageService.clear('cc');
// }

}
find(){
  
  this.finds = new QuestionPackSearh(null,this.name,null);
  let resp = this.applicantanswer.search(this.finds);
    resp.subscribe((data) => this.all = data );

}

}