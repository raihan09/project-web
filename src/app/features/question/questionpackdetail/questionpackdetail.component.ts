import { PackageService } from 'src/app/core/services/package.service';
import { QuestionPack } from '../../../core/models/question-pack.model';
import { QuestionService } from './../../../core/services/question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { ToastService } from 'src/app/core/services/toast.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Profile } from 'src/app/core/models/profile.model';
import { PackageQuestionService } from 'src/app/core/services/package-question.service';
import { Subject } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-questionpackdetail',
  templateUrl: './questionpackdetail.component.html',
  styleUrls: ['./questionpackdetail.component.css']
})
export class QuestionpackdetailComponent implements OnInit {
  questionPack: QuestionPack = new QuestionPack(null, null, null);
  id: string;
  columns: any[];
  columns2: any[];
  questpack2: any;
  display: any;
  display2: any;
  pageSize: number;
  cities1: SelectItem[];
  co: any;
  question: any;
  quest: any;
  baru: any;
  pack:any="";
  arrayList:any[];
  reload:any;
  message:any;
  selectedCity1:any;
idqp:string;
questt:any;

  constructor(
    private routeStateService: RouteStateService,
    private routes : ActivatedRoute,
    private questPackService: PackageQuestionService,
    private questService: QuestionService,
    private packService: PackageService
    , private toastService: ToastService,
     private router: Router,
     private messageService: MessageService   
  ) { }

  ngOnInit() {
    
      
    this.id = this.routes.snapshot.paramMap.get('id');
    //this.pack= this.routes.snapshot.paramMap.get()
    this.reload ='/main/question/questionpackdetail/'+ this.id;
    let resp = this.questPackService.findpackQuestionbyidPack(this.id);
    resp.subscribe((data) => this.questpack2 = data);
    resp.subscribe((data) => this.question = data);
    let resp2 = this.packService.findpackbyid(this.id);
    resp2.subscribe((data) => this.pack = data);
    this.columns = [
      { field: 'question', field2: 'questionTitle', header: 'Question Name' , field3: ''},
      { field: 'question', field2: 'questionType', field3: 'questionTypeTitle', header: 'Question Type' },
    ];
      this.columns2 = [
        { field: 'questionTitle', field2: '', header: 'Question name' },
        { field: 'questionType', field2: 'questionTypeTitle', header: 'Question Type' }
    
    ];
    this.cities1 = [
      {label: 'Find By', value: null},
      {label: 'Name', value: 'a'},
      {label: 'Email', value: 'b'}
  ];

  }

  back() {
    this.routeStateService.loadPrevious();
  }
  showDialog(idd: string) {
    let su = new Subject<any>();
    this.display = true;
    this.questService.findQuestionByid(idd).subscribe((data1) => su.next(data1));
    su.subscribe(res => this.question = res);
  
}
goTonewquestion(department: number) {
  this.routeStateService.add('New Question', '/main/question/newquestion', department, false);
}

findPackQuestbyIdpack(idd: string) {
  this.questPackService.findpackQuestionbyidPack(idd).subscribe((data1) => this.questpack2);
  
}
findQuestByid(idd: string) {
  this.questService.findQuestionByid(idd).subscribe((data1) => this.questt);
}
// AddQuestion(quest){
//   // tslint:disable-next-line: no-unused-expression
//   this.questionPack = new QuestionPack(this.pack, quest, 'Active');
 
//   let list:Array<any> = [this.questionPack];
//   const resp = this.questPackService.addQuestionPack(list);
//   resp.subscribe((data) => this.baru = data);
  
//  // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
//  this.toastService.addSingle("tc",'succes','','Question Added');
// console.log(this.pack)
// console.log(this.questionPack);
// console.log(quest)
// }
DeleteQuestion(id){
  this.messageService.clear('cc');
    let resp = this.questPackService.deletePackageQuestion(this.idqp);
    resp.subscribe((data) => this.questpack2 = data);
    console.log(this.idqp)
    
   // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
   this.toastService.addSingle("tt",'success','','Question Deleted');
}
showConfirm(id1) {
   let su = new Subject<any>();
    this.questService.findQuestionByid(id1).subscribe((data1) => su.next(data1));
    su.subscribe(res => this.question = res);
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure to add?', detail:'Confirm to proceed'});
}
showConfirm2(idaw) {

  this.idqp=idaw;
  this.messageService.clear();
  this.messageService.add({key: 'cc', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});

console.log(idaw)
}
showDialog1(idd: string) {
  let su = new Subject<any>();
  this.display2 = true;
  this.questService.getAllQuestion().subscribe((data1) => su.next(data1));
  su.subscribe(res => this.quest = res);

}
onConfirm() { 
  this.messageService.clear('c');
  this.questionPack = new QuestionPack(this.pack, this.question, 'active');
 console.log(this.question)
 console.log(this.pack)
  let list:Array<any> = [this.questionPack];
  const resp = this.questPackService.addQuestionPack(list);
  resp.subscribe((data) => this.baru = data);
  this.message = new Object ()
 // this.router.navigateByUrl('/main/question/questionpackdetail/'+this.id);
 this.toastService.addSingle("tc",'success','','Question Added');

}

onReject() {
  this.messageService.clear('c');
  this.messageService.clear('cc');
}

}
