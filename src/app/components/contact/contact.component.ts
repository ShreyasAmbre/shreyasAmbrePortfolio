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
    this.emailSendSuccess = undefined
    console.log("CONTACT FORM DETAILS", formData);
    
    // ELACTICMAIL Services :- 
    // API KEY of  shreyasAmbreEmailSendAPI:- 
    // B449045B07BB7F598D7FEAFEF7EE414E8C519921A92D2E81109BF07AAE6B616D6E22B8227C53B20E0644FC52D56B5B54


    let reqObj = {
      apikey:"B449045B07BB7F598D7FEAFEF7EE414E8C519921A92D2E81109BF07AAE6B616D6E22B8227C53B20E0644FC52D56B5B54",
      subject:"Test SUbject",
      from:"abc@gmail.com",
      to:"shreyasambre00@gmail.com",
      body: "Email Test Body",
      isTransactional: true,
      transactionID: 'shreyasAmbreEmailSendAPI',
    }

    // this.httpc.post('http://api.elasticemail.com/v2/email/send?apikey=B449045B07BB7F598D7FEAFEF7EE414E8C519921A92D2E81109BF07AAE6B616D6E22B8227C53B20E0644FC52D56B5B54&subject=TEST_SUBJECT&from=shreyasambre00@gmail.com&fromName=ABC&sender=shreyasambre00@gmail.com&senderName=SHREYASAMBRE&msgFrom=&msgFromName=&replyTo=&replyToName=&to=&msgTo=', reqObj).subscribe(res => {
    //   console.log("SMTP RES ===>", res)
    // })

    /*
      &from, &fromName, &msgFrom, &msgFromName  :- Owner of SMTP Account 

    */

    this.httpc.post(`http://api.elasticemail.com/v2/email/send?apikey=B449045B07BB7F598D7FEAFEF7EE414E8C519921A92D2E81109BF07AAE6B616D6E22B8227C53B20E0644FC52D56B5B54
    &subject=${formData.senderSubject}
    &from=shreyasambre00@gmail.com
    &fromName=SHREYAS AMBRE

    &sender=${formData.senderEmail}
    &senderName=${formData.senderName}

    &msgFrom=shreyasambre00@gmail.com
    &msgFromName=SHREYAS AMBRE
    
    &replyTo=${formData.senderEmail}
    &replyToName=${formData.senderName}
    &to=${formData.senderName}
    &msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml=&bodyText=&charset=&charsetBodyHtml=&charsetBodyText=`, reqObj).subscribe((res:any) => {
      console.log("SMTP RES ===>", res)

      if(res.success === true){
        this.emailSendSuccess = true
      }else{
        this.emailSendSuccess = false
      }
    })



  }
  

}
