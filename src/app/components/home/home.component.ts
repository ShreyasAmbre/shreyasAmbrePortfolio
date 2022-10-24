import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: MainServiceService, private route: Router ) { }

  ngOnInit(): void {
  }

  navigateTo(navigateToPage:string){
    this.route.navigate([navigateToPage])
  }

  downloadResume(){
    this.service.getResumeDownload("Shreyas-Ambre-Resume-v3", "assets/docs/Shreyas-Ambre-Resume-v3.pdf")
  }

  goToSocialHandle(navigateToPage: string){
    this.service.openSocialHandle(navigateToPage)
  }
}
