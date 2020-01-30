import { UserService } from './../../core/services/user.service';
import { ProfileService } from './../../core/services/profile.service';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProfileDataService } from 'src/app/features/profile/profile-data.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Profile } from 'src/app/core/models/profile';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
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
  cities1: SelectItem[];
  selectedCity1: any;
  name:string;

  constructor(
    private routeStateService: RouteStateService,
    private profileService: ProfileDataService,
    private profil: ProfileService,
    private router: Router,
    private userService : UserService) { }

  ngOnInit() {
    let resp = this.userService.getAllUser();
    resp.subscribe((data) => this.profiles = data);
    //resp.subscribe((data) => this.profileid = data);
    this.pageSize = 10;

    this.columns = [
      { field: 'profile', header: 'Name', field2: 'profileName'},
      { field: 'profile', header: 'Email', field2: 'email' },
      { field: 'profile', header: 'Phone', field2: 'phone' }
    ];
    this.cities1 = [
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
    this.profiles === null;
    let resp = this.userService.findUserbyname(this.name);
    console.log(this.name)
    resp.subscribe((data) => {this.profiles = data});
    this.router.navigateByUrl("/main/candidates")

    
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
}
