import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../services/main-service.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data:any;
  constructor(public service: MainServiceService) { }

  ngOnInit(): void {
  }
}
