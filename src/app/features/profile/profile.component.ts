import { Subject } from 'rxjs';
import { ReportService } from './../../core/services/report.service';
import { UserService } from './../../core/services/user.service';
import { ProfileService } from './../../core/services/profile.service';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Profile } from 'src/app/core/models/profile.model';
import { SelectItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
interface City{
  name: string;
  code: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  columns: any;
profileid: any;
  profiles: any;
display: boolean = false;
  pageSize: number;
  pilihan: SelectItem[];
  selectedCity1: any;
  name:string;
  iduser:any;
  report: Object;


  constructor(
    private routeStateService: RouteStateService,
    private profil: ProfileService,
    private router: Router,
    private userService : UserService,
    private toastService: ToastService,
    private messageService: MessageService,
    private reportService:ReportService ) { 
      let resp = this.userService.getAllUser();
      resp.subscribe((data) => this.profiles = data); 
    }

  ngOnInit() {
  
    //resp.subscribe((data) => this.profileid = data);
    this.pageSize = 10;

    this.columns = [
      { field: 'profile', header: 'Name', field2: 'profileName'},
      { field: 'profile', header: 'Email', field2: 'email' },
      { field: 'profile', header: 'Phone', field2: 'phone' }
    ];
    this.pilihan = [
      {label: 'Find By', value: null},
      {label: 'Name', value: 'name'},
      {label: 'Phone', value: 'phone'},
      {label: 'Email', value: 'email'}
  ];

  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }
  public profileDetail(){
    this.router.navigateByUrl('/profiledetail/');
    }

    public showDialog(id: string) {

      this.display = true;
     // this.profileid.remove();
      let resp = this.userService.findProfilebyid(id);
      resp.subscribe((data1) => this.profileid = data1);

}
  // public findProfileById(id){
  //   let resp = this.profile.findProfileById(id);
  //   resp.subscribe((data) => this.profileid = data);
  // }
   findProfile() {
    // if (this.selectedCity1 == 'name') {
    this.profiles = null;
    let resp = this.userService.findProfilebyName(this.name);
    console.log(this.name)
    resp.subscribe((data) => {this.profiles = data});

    
    // return;
    // }
    // else if (this.selectedCity1 === 'phone'){
    //   let resp = this.profil.findProfilebyPhone(name);
    // resp.subscribe((data) => this.profiles = data);
    // return;
    // }
    // else if (this.selectedCity1 === 'email'){
    //   let resp = this.profil.findProfilebyEmail(name);
    //   resp.subscribe((data) => this.profiles = data);
    //   return;
    //}

  // }
  // public findProfileByPhone(name){
  //   let resp = this.profil.findProfilebyPhone(name);
  //   resp.subscribe((data) => this.profileid = data);
  // }
  // public findProfileByEmail(name){
  //   let resp = this.profil.findProfilebyEmail(name);
  //   resp.subscribe((data) => this.profileid = data);
  // }
}

DeleteUser(id) {
  this.iduser=id
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure to delete?', detail:'Confirm to proceed'});
}
onConfirmDelete(id) { 
  this.messageService.clear('c');
  const resp = this.userService.deleteUser(this.iduser);
  resp.subscribe((data) => { this.toastService.addSingle("tct",'success','','Candidate Deleted')},
  (error)=>{  this.toastService.addSingle("tc",'error','',error.error);});


}
reload(){
  location.href="main/candidates"
}

onReject() {
  this.messageService.clear('c');
  this.messageService.clear('cc');
}
reportCandidate(id){
 
  let resp = this.reportService.reportCandidate(id);
  resp.subscribe((data) => {this.report=data});

}
}
