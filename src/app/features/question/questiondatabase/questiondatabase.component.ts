import { QuestionService } from './../../../core/services/question.service';
import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { PackageService } from 'src/app/core/services/package.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-questiondatabase',
  templateUrl: './questiondatabase.component.html',
  styleUrls: ['./questiondatabase.component.css']
})
export class QuestiondatabaseComponent implements OnInit {

  columns: any[];


quest:any;
questpack2:any;
  pageSize: number;
  cities1: SelectItem[];
  selectedCity1:any;

  constructor(
    private routeStateService: RouteStateService,
    private questionService:QuestionService,
    private router:Router) { }

  ngOnInit() {
    let resp = this.questionService.getAllQuestion();
    resp.subscribe((data) => this.quest = data );
    console.log(this.quest)
    this.pageSize = 10;

    this.columns = [
      { field: 'questionTitle',field2:'', header: 'Question name' },
      { field: 'questionType',field2: 'questionTypeTitle', header: 'Question Type' }
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
    goTonewquestion(department: number) {
      this.routeStateService.add('New Question', '/main/question/newquestion', department, false);
    }
}