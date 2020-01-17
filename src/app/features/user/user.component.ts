import { user } from '../../core/models/user';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/features/user/user-data.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-employees',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
  columns: any[];

  user: user[];

  pageSize: number;

  constructor(
    private routeStateService: RouteStateService,
    private userService: UserDataService) { }

  ngOnInit() {

    this.pageSize = 10;

    this.columns = [
      { field: 'username', header: 'Username' },
      { field: 'profile_name', header: 'Name' },
      { field: 'gender', header: 'Gender' }
    ];

    this.user = this.userService.getUserList();
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }
}
