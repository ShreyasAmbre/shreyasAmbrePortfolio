import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../services/main-service.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  data:any;

  senderName:any = ''
  senderEmail:any = ''
  senderSubject:any = ''
  senderMsg:any = ''
  emailSendSuccess:boolean | undefined;




  constructor(public service: MainServiceService, private httpc: HttpClient) { }

  ngOnInit(): void {
  }

  goToSocialHandle(navigateToPage: string){
    this.service.openSocialHandle(navigateToPage)
  }


  sendMail(formData:any){
    let reqObj = {
      "to": "shreyasambre00@gmail.com",
      "subject": formData.senderSubject,
      "text": formData.senderMsg
    }
    console.log("MAIL SENT ===>", reqObj)
    this.httpc.post('https://wax-boiling-creature.glitch.me/send-mail', reqObj).subscribe((res:any) => {
      console.log("MAIL SENT", res)
    }, (error:any) => {
      console.log("MAIL SENT", error)
    })





  }
  

}
