import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/services/main-service.service';
import * as confetti from 'canvas-confetti';
import * as AOS from 'aos';
import { interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  fireInterval = interval(1000)
  constructor(public service: MainServiceService, private route: Router ) { }

  ngOnInit(): void {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't 
    // require to build new store with AOS elements and should be as light as possible.
  }

  ngAfterViewInit(): void {
    // this.fire('fireworks')
    // this.fire('schoolPride')
  }

  fire(method:string, particleRatio?:any, opts?:any, ){
    let confettiEle:any = document.getElementById('confetti-canvas')
    var myConfetti = confetti.create(confettiEle, { resize: true });
    var colors = ['#f58220', '#053f5c'];
    var end = Date.now() + (3 * 1000);
    switch (method) {
      case 'fireworks':
        // Ex : Fireworks (Working)
        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min:any, max:any) {
          return Math.random() * (max - min) + min;
        }

        var interval:any = setInterval(function() {
          var timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          var particleCount = 50 * (timeLeft / duration);
          // since particles fall down, start a bit higher than random
          myConfetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          myConfetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
        break;
      case 'schoolPride':
        // myConfetti({
        //   particleCount: 300,
        //   angle: 60,
        //   spread: 55,
        //   origin: { x: 0 },
        //   colors: colors
        // });
        // myConfetti({
        //   particleCount: 300,
        //   angle: 120,
        //   spread: 65,
        //   origin: { x: 1 },
        //   colors: colors
        // });
        // // if (Date.now() < end) {
        // //   requestAnimationFrame(() => {
        // //     myConfetti({
        // //       particleCount: 400,
        // //       angle: 120,
        // //       spread: 55,
        // //       origin: { x: 1 },
        // //       colors: colors
        // //     })
        // //   });
        // // }

        (function frame() {
          myConfetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
          });
          myConfetti({
            particleCount: 2,
            angle: 120,
            spread: 65,
            origin: { x: 1 },
            colors: colors
          });
        
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      break;
      default:
        break;
    }
    
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

  openGithubProject(projectName:string){
    if(projectName === 'carpulling'){
      window.open('https://github.com/ShreyasAmbre/carpooling#readme')
    }else if(projectName === 'tradingproject'){
      window.open('https://github.com/ShreyasAmbre/tradingPlatformSnaps')
    }else if(projectName === 'realestateproject'){
      window.open('https://github.com/ShreyasAmbre/poonampostsellrepo')
    }
  }
}
function take(arg0: number): import("rxjs").OperatorFunction<number, unknown> {
  throw new Error('Function not implemented.');
}

