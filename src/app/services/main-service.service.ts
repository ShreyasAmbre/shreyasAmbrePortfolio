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
}
