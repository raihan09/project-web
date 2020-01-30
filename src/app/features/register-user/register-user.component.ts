import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { birthDateValidator } from 'src/app/core/validators/birthdate.validators';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { environment } from 'src/environments/environment';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-register-user',
  templateUrl: 'register-user.component.html',
  styleUrls: ['register-user.component.css']


})
export class RegisterUserComponent implements OnInit {

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
  constructor(private userService: UserDataService, private router: Router, private fb: FormBuilder, private toastService: ToastService) { }

  ngOnInit() {
    this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ],
    this.asd =[
      {label : "Male", value : "Male"},
    {label : "Female", value : "Female"}],

    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'emailId': new FormControl('', [Validators.required, Validators.email]),
      'birthDate': new FormControl('', [Validators.required, birthDateValidator]),
      'gender': new FormControl,
      'phone': new FormControl,
      'fullname': new FormControl,
    });

    this.version = environment.version;
  }

  onClickRegisterUser() {
    let isRegistered: boolean = this.userService.addUser(
      this.userform.controls["name"].value,
      this.userform.controls["password"].value,
      this.userform.controls["emailId"].value,
      this.userform.controls["birthDate"].value,
      this.userform.controls["gender"].value,
      this.userform.controls["phone"].value,
      this.userform.controls["fullname"].value);
    if (isRegistered) {
      this.router.navigate(['/login']);
      this.toastService.addSingle("ta","success", "", "User registered.")
    }
  }

  onClickGoToLogin() {
    this.router.navigate(['/login']);
  }

}

