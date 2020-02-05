import { QuestiontypeService } from './../../../core/services/questiontype.service';
import { CorrectAnswer } from './../../../core/models/correctAnswer.model';
import { Question } from './../../../core/models/question.model';
import { QuestionService } from './../../../core/services/question.service';
import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { MessageService } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { Choice } from 'src/app/core/models/choice.model';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
  baru: any;
  typenew:any;
  idqp: any;
  answer: CorrectAnswer = new CorrectAnswer('','')
  choice :Choice = new Choice('','','','','')
  question: Question = new Question(null,this.typenew,null,null,null,this.choice,this.answer,'active')
title:any;
deskripsi:any;

  constructor(private routeStateService: RouteStateService,
    private messageService: MessageService,
    private questionService:QuestionService,
    private router:Router,
    private toastService: ToastService,
    private questionTypeService:QuestiontypeService
    ) { }
  uploadedFiles: any[] = [];

  ngOnInit() {
  }

  goToPacktDetails(department: number) {
    this.routeStateService.loadPrevious();
  }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
onBasicUploadAuto(event) {
  this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
}
showConfirmadd() {

  this.messageService.add({key: 'cc', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});

}
onConfirmAdd(quest){
  this.messageService.clear('cc');
    let resp = this.questionService.postQuestionText(quest);
    resp.subscribe((data) => {this.toastService.addSingle("tt",'success','','Question Added');},
    (error)=>{  this.toastService.addSingle("ta",'error','',error.error);});
    
   // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
   
}
getType(type){
  let resp = this.questionTypeService.getQuestiontypeByName(type);
  resp.subscribe((data) => {this.typenew = data
    this.question = new Question(null,this.typenew,this.title,this.deskripsi,null,this.choice,this.answer,'active')});
 
  console.log(this.typenew)
  console.log(this.question)
}
AddQuestion(){
  let resp = this.questionService.postQuestionText(this.question);
  resp.subscribe((data) => this.typenew = data);
  console.log(this.typenew)
  console.log(this.question)
}
reload(){
  location.href="main/question/questiondatabase"
}
}
