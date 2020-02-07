import { UserService } from './../../core/services/user.service';
import { User } from 'src/app/core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { birthDateValidator } from 'src/app/core/validators/birthdate.validators';
import { environment } from 'src/environments/environment';
import { SelectItem } from 'primeng/api';
import { Profile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-register-user',
  templateUrl: 'register-user.component.html',
  styleUrls: ['register-user.component.css']


})
export class RegisterUserComponent implements OnInit {
  profile:Profile = new Profile("","","","","","","")
  userRegis:User = new User("","",this.profile)
  userform: FormGroup;

  name: string;

  emailId: string;

  password: string;

  version: string;
  gender: string;
  fullname : string;
  phone:string;
  asd: SelectItem[];
  cars: SelectItem[];
  selectedCity1:string;

  selectedCar1: string;
  constructor( private router: Router, private fb: FormBuilder, private toastService: ToastService, private userService:UserService) { }

  ngOnInit() {

    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'emailId': new FormControl('', [Validators.required, Validators.email]),
      'birthDate': new FormControl('', [Validators.required, birthDateValidator]),
      'gender': new FormControl,
      'phone': new FormControl,
      'fullname': new FormControl,
      'address' :new FormControl
    });

    this.version = environment.version;
  }

  onClickRegisterUser() {
    this.profile= new Profile (  this.userform.controls["fullname"].value,
      this.userform.controls["gender"].value,
      this.userform.controls["birthDate"].value,
      this.userform.controls["address"].value,
      this.userform.controls["phone"].value,
      this.userform.controls["emailId"].value,
      "active");
      this.userRegis = new User (this.userform.controls["name"].value,"",this.profile)
      console.log("profile:"+this.profile)
      console.log("user:"+this.userRegis)
      const resp = this.userService.register(this.userRegis);
      resp.subscribe((data) =>{
      this.toastService.addSingle("tc", "success", "", "User registered. Please Login")},
      (error)=>{  this.toastService.addSingle("tc",'error','',error.error);});
console.log( "nama"+this.userform.controls["fullname"].value)
  }

  onClickGoToLogin() {
    this.router.navigate(['/login']);
  }

}

