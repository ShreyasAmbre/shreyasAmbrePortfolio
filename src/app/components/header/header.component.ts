import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('heading', {static: true}) heading!: ElementRef

  i = 0
  headingTxt = 'Portfolio'
  speed = 100
  len = this.headingTxt.length

  constructor( private elementRef: ElementRef,) { }

  ngOnInit(): void {
    // this.typingEffect()
  }

  ngAfterViewInit() {
    // this.typingEffect()
  }

  typingEffect(){
    if(this.i < this.len){
      this.heading.nativeElement.innerHTML += this.headingTxt.charAt(this.i);
      this.i++
      setTimeout(() => this.typingEffect(), this.speed);
    }
  }
  

}
