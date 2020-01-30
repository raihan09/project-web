import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-addassignquestion',
  templateUrl: './addassignquestion.component.html',
  styleUrls: ['./addassignquestion.component.css']
})
export class AddassignquestionComponent implements OnInit {

  constructor(private routeStateService: RouteStateService) { }

  ngOnInit() {
  }
  
  goToAssinquestionlist(department: number) {
    this.routeStateService.add("Question Pack Detail", "/main/assignquestion/", department, true);
  }

}
