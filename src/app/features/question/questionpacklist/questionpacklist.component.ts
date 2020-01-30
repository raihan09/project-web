import { PackageService } from './../../../core/services/package.service';
import { QuestionpackdetailComponent } from './../questionpackdetail/questionpackdetail.component';
import { PackageQuestionService } from './../../../core/services/package-question.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/core/models/profile';
import { SelectItem } from 'primeng/components/common/api';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { ProfileDataService } from '../../profile/profile-data.service';
import { Router } from '@angular/router';
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

  profile: Profile[];
questpack:any;
questpack2:any;
  pageSize: number;
  cities1: SelectItem[];
  selectedCity1: City;

  constructor(
    private routeStateService: RouteStateService,
    private packService:PackageService,
    private router:Router) { }

  ngOnInit() {
    let resp = this.packService.getAllpack();
    resp.subscribe((data) => this.questpack = data);
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
}

