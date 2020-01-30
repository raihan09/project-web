import { QuestionType } from './../../../core/models/questiontype.model';
import { QuestiontypeService } from './../../../core/services/questiontype.service';
import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/components/common/api';
import { Subject } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-questiontype',
  templateUrl: './questiontype.component.html',
  styleUrls: ['./questiontype.component.css']
})
export class QuestiontypeComponent implements OnInit {
baru:any;
baruadd:any;
  columns: any[];
type:any;
questpack2:any;
  pageSize: number;
  cities1: SelectItem[];
  message: any;
  display: boolean;
  display2:any;
  idqp:any;
qtype : QuestionType = new QuestionType(null,null,null,'active')
  constructor(
    private routeStateService: RouteStateService,
    private questiontypeservice:QuestiontypeService,
    private router:Router,
    private routes : ActivatedRoute,
    private toastService: ToastService,
     private messageService: MessageService  ) { }

  ngOnInit() {
    let resp = this.questiontypeservice.getAllQuestionType();
    resp.subscribe((data) => this.type = data);
    resp.subscribe((data) => this.baru = data);
    this.pageSize = 10;

    this.columns = [
      { field: 'questionTypeTitle', header: 'Question Type Title' },
      { field: 'answerType', header: 'Answer Type' }
    ];
    this.cities1 = [
      {label:'Find By', value:null},
      {label:'Name', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Email', value:{id:2, name: 'Rome', code: 'RM'}}
  ];

    // this.profile = this.profileService.getProfileList();
  }
  back() {
    this.routeStateService.loadPrevious();
  }
  showDialog(idd: string) {

    this.display = true;

  
}


DeleteQuestionType(){
  this.messageService.clear('cc');
    let resp = this.questiontypeservice.deleteQuestionType(this.idqp);
    resp.subscribe((data) => this.type = data);
    console.log(this.idqp)
    
   // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
   this.toastService.addSingle("tt",'success','','Question Deleted');
}
showConfirm() {

  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure to add?', detail:'Confirm to proceed'});
}
showConfirm2(idaw) {
  this.idqp=idaw;
  this.messageService.add({key: 'cc', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});

}
showConfirm3(idaw) {
  this.idqp=idaw;
  this.messageService.add({key: 'ccc', sticky: true, severity:'warn', summary:'Are you sure to update?', detail:'Confirm to proceed'});

}
showDialog1(idd: string) {
  this.display2 = true;
  const resp = this.questiontypeservice.findQuestionTypeByid(idd);
  resp.subscribe((data) => this.baru = data);

}
onConfirm() { 
  this.messageService.clear('c');
console.log(this.qtype)
  const resp = this.questiontypeservice.addQuestionType(this.qtype);
  resp.subscribe((data) => this.baruadd = data);

 this.toastService.addSingle("tc",'success','','Question Type Added');

}
onConfirm2() { 
  this.messageService.clear('ccc');

  const resp = this.questiontypeservice.updateQuestionType(this.baru);
  resp.subscribe((data) => this.baru = data);

 this.toastService.addSingle("tc",'success','','Question Type Updated');

}
onReject() {
  this.messageService.clear('c');
  this.messageService.clear('cc');
  this.messageService.clear('ccc');
}

}


