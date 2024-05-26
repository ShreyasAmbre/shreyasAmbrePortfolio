import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MainServiceService } from '../../services/main-service.service';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  @ViewChild('confirmModal') confirmModal: ElementRef | undefined

  senderName:string = ''
  senderEmail:string = ''
  senderSubject:string = ''
  senderMsg:string = ''
  isMailSent: null | boolean = null; 


  constructor(public service: MainServiceService, private httpc: HttpClient, private renderer: Renderer2) { }

  ngOnInit(): void {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't 
    // require to build new store with AOS elements and should be as light as possible.
  }

  goToSocialHandle(navigateToPage: string){
    this.service.openSocialHandle(navigateToPage)
  }

  closeModal(){
    this.renderer.removeClass(this.confirmModal?.nativeElement, 'show')
  }


  sendMail(formData:any){
    this.isMailSent = false

    let reqObj = {
      "to": "shreyasambre00@gmail.com",
      "subject": formData.senderSubject,
      "text": formData.senderMsg
    }
    console.log("MAIL SENT ===>", reqObj)
    this.httpc.post('https://wax-boiling-creature.glitch.me/send-mail', reqObj).subscribe((res:any) => {
      console.log("MAIL SENT", res)
      this.isMailSent = true
    }, (error:any) => {
      this.isMailSent = false
      console.log("MAIL SENT", error)
    })





  }

  test(){
    console.log("TEST");
    
  }
  

}
