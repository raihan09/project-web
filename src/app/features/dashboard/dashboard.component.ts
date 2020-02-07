import { ReportService } from './../../core/services/report.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  approve:any;
  totalCandidates:any;
  totalQuestions:any;
  rcandidate:any;
  acandidate:any;
  barChartData: any;

  doughnutChartData: any;

  msgs: any[];

  constructor(translate: TranslateService,
    private reportService:ReportService) {
    this.barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Rejected',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Approved',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

    this.doughnutChartData = {
      labels: ['Active', 'Inactive', 'Deleted'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.msgs = [];

    translate.get("Welcome Admin").subscribe((text: string) => {
      this.msgs.push({ severity: 'success', summary: '', detail: text });
    });

  }

  ngOnInit() {
    this.totalCandidate();
    this.totalQuestion();
    this.rejectedCand();
    this.approvedCand();
   
  }
  totalCandidate(){
    let resp= this.reportService.totalCandidate();
    resp.subscribe((data)=> (this.totalCandidates=data))  
  }
  totalQuestion(){
    let resp= this.reportService.totalQuestion();
    resp.subscribe((data)=> (this.totalQuestions=data))
  }
  rejectedCand(){
    let resp= this.reportService.rejectedCand();
    resp.subscribe((data)=> (this.rcandidate=data))
  }
  approvedCand(){
    let resp= this.reportService.approvedCand();
    resp.subscribe((data)=> (this.acandidate=data))
  }
}
