import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service: MainServiceService) { }

  ngOnInit(): void {
  }

  downloadResume(){
    this.service.getResumeDownload("Shreyas-Ambre-Resume-v3", "assets/docs/Shreyas-Ambre-Resume-v3.pdf")
  }

}
