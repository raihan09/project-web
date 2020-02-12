import { PackageService } from './../../../core/services/package.service';
import { QuestionpackdetailComponent } from './../questionpackdetail/questionpackdetail.component';
import { PackageQuestionService } from './../../../core/services/package-question.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/core/models/profile.model';
import { SelectItem, MessageService } from 'primeng/components/common/api';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Router } from '@angular/router';
import { Package } from 'src/app/core/models/package.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { ReportService } from 'src/app/core/services/report.service';
interface City{
  name:string;
  code:string;
}
@Component({
  selector: 'app-questionpacklist',
  templateUrl: './questionpacklist.component.html',
  styleUrls: ['./questionpacklist.component.css']
})
export class QuestionpacklistComponent implements OnInit {
  columns: any[];
  verif:string;
  profile: Profile[];
questpack:any;
questpack2:any;
  pageSize: number;
  cities1: SelectItem[];
  selectedCity1: City;
  package : Package = new Package(null,null,'active');
  display: boolean;
  idpack: any;
  displayU: boolean;
  packupdate:any='aa';
  report: Object;
  display2: boolean;
  name: any;
packagesearch:Package;
  constructor(
    private routeStateService: RouteStateService,
    private packService:PackageService,
    private router:Router,
    private toastService: ToastService,
     private messageService: MessageService ,
     private reportService: ReportService) { }

  ngOnInit() {
    let resp = this.packService.getAllpack();
    resp.subscribe((data) => this.questpack = data);
    this.package = new Package(null,null,'active');
    this.pageSize = 10;

    this.columns = [
      { field: 'packageName', header: 'Pack Name' },
      { field: 'amountOfQuestion', header: 'Amount of Question' },
      { field: 'amountOfTime', header: 'Amount of Time' }
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
     showDialogAdd(idd: string) {

    this.display = true;  
}
showConfirmAdd() {

  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure to add?', detail:'Confirm to proceed'});
}
onConfirmAdd() { 
  this.messageService.clear('c');
  console.log(this.package)
  const resp = this.packService.addPackage(this.package);
  resp.subscribe((data) => { this.toastService.addSingle("tct",'success','','Question Pack Added')},
  (error)=>{  this.toastService.addSingle("tc",'error','',error.error);});

  console.log(this.package)


}
showConfirmDelete(id) {
this.idpack=id
  this.messageService.clear();
  this.messageService.add({key: 'cc', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});
}
onConfirmDelete() { 
  this.messageService.clear('cc');
  const resp = this.packService.deletePackage(this.idpack);
  resp.subscribe((data) => { this.toastService.addSingle("tcct",'success','','Question Pack Deleted')},
  (error)=>{  this.toastService.addSingle("tcc",'error','',error.error);});
}
showDialogUpdate(idd: string) {
  this.displayU = true;  
  const resp = this.packService.findpackbyid(idd);
  resp.subscribe((data) => this.packupdate=data);

}
showConfirmUpdate() {
  
    this.messageService.clear();
    this.messageService.add({key: 'cu', sticky: true, severity:'warn', summary:'Are you sure to update?', detail:'Confirm to proceed'});
  }
  onConfirmUpdate() { 
    this.messageService.clear('cu');
    const resp = this.packService.updatePackage(this.packupdate);
    resp.subscribe((data) => { this.toastService.addSingle("tcu",'success','','Question Pack Updated')},
    (error)=>{  this.toastService.addSingle("tu",'error','',error.error);});
  }
reload(){
  location.href="main/question"
}
onReject() {
  this.messageService.clear();
}
reportCorrect(){
 
  let resp = this.reportService.reportPackageCorrect();
  resp.subscribe((data) => {this.report=data});

}
reportWrong(){

let resp = this.reportService.reportPackageWrong();
resp.subscribe((data) => {this.report=data });

}
reportCorrectQuestPack(){
 
  let resp = this.reportService.reportPackQuestCorrect();
  resp.subscribe((data) => {this.report=data});

}
reportWrongQuestPack(){

let resp = this.reportService.reportPackQuestWrong();
resp.subscribe((data) => {this.report=data });

}
showDialog2(){
  this.display2 =true
}
find(){
  
  this.packagesearch = new Package(this.name,null,null);
  
  let resp = this.packService.searchPackage(this.packagesearch);
    resp.subscribe((data) => this.questpack = data );

}
}

