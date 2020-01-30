import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { MessageService } from 'primeng/components/common/api';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {

  constructor(private routeStateService: RouteStateService,
    private messageService: MessageService) { }
  uploadedFiles: any[] = [];

  ngOnInit() {
  }

  goToPacktDetails(department: number) {
    this.routeStateService.loadPrevious();
  }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
onBasicUploadAuto(event) {
  this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
}
}
