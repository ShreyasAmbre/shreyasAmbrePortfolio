import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor() { }

  scrollToContactForm($element:any) {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  getResumeDownload(fileName:string, url:string){
    let link = document.createElement('a')
    link.download = fileName
    link.href = url
    link.click();
  }

  openSocialHandle(navigateToPage: string){
    switch (navigateToPage) {
      case 'github':
          window.open('https://github.com/ShreyasAmbre', 'blank')
        break;
      case 'linkedin':
          window.open('https://www.linkedin.com/in/shreyas-ambre-3928b71a7', 'blank')
        break;
      case 'whatsapp':
        window.open('https://wa.me/8149421528', 'blank')
        break;
      case 'gmail':
          window.open('https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example', 'blank')
          break;
      default:
        break;
    }
  }
}
