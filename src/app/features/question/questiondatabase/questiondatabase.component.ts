import { ReportService } from './../../../core/services/report.service';
import { QuestionService } from './../../../core/services/question.service';
import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { PackageService } from 'src/app/core/services/package.service';
import { Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-questiondatabase',
  templateUrl: './questiondatabase.component.html',
  styleUrls: ['./questiondatabase.component.css']
})
export class QuestiondatabaseComponent implements OnInit {

  columns: any[];
  report:any;
  display2:boolean;
quest:any;
questpack2:any;
  pageSize: number;
  cities1: SelectItem[];
  selectedCity1:any;
  question: any;
  display: boolean;
  idqp: any;
  baru: any;

  constructor(
    private routeStateService: RouteStateService,
    private questionService:QuestionService,
    private router:Router,
    private toastService: ToastService,
    private messageService: MessageService,
    private reportService:ReportService ) { }

  ngOnInit() {
    let resp = this.questionService.getAllQuestion();
    resp.subscribe((data) => this.quest = data );
    console.log(this.quest)
    this.pageSize = 10;

    this.columns = [
      { field: 'questionTitle',field2:'', header: 'Question name' },
      { field: 'questionType',field2: 'questionTypeTitle', header: 'Question Type' }
    ];
    this.cities1 = [
      {label:'Find By', value:null},
      {label:'Name', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Email', value:{id:2, name: 'Rome', code: 'RM'}}
  ];

    // this.profile = this.profileService.getProfileList();
  }
  goToPacktDetails(id: string) {
    // let resp = this.packService.findpackbyid(id);
    // resp.subscribe((data1) => this.questpack2 = data1);
    this.routeStateService.add("Question Pack Detail", "/main/question/questionpackdetail/"+id,null, false);
  }
  public packDetail(){
    this.router.navigateByUrl('/questionpackdetail/');
    }
    goTonewquestion(department: number) {
      this.routeStateService.add('New Question', '/main/question/newquestion', department, false);
    }
    showDialog(idd: string) {
      let su = new Subject<any>();
      this.display = true;
      this.questionService.findQuestionByid(idd).subscribe((data1) => su.next(data1));
      su.subscribe(res => this.question = res);
    
  }
  showConfirmdelete(idaw) {
    this.idqp =idaw;
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});
  
  }
  
  showConfirmupdate() {
    this.messageService.add({key: 'cc', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});
  
  }
  
onConfirmDelete(){
  this.messageService.clear('c');
    let resp = this.questionService.deleteQuestion(this.idqp);
    resp.subscribe((data) => { this.toastService.addSingle("tt",'success','','Question Deleted');},
    (error)=>{  this.toastService.addSingle("ta",'error','',error.error);});
    
   // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
  
}
reload(){
  location.href="main/question/questiondatabase"
}
onReject() {
  this.messageService.clear();
}
showDialog2(){
 this. display2=true;
}
reportCorrect(){
 
    let resp = this.reportService.reportCorrectAnswer();
    resp.subscribe((data) => {this.report=data});
  
}
reportWrong(){
 
  let resp = this.reportService.reportWrongAnswer();
  resp.subscribe((data) => {this.report=data });

}
}