import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  isWebsiteCompatible: boolean = false
  deviceInfo:any = null;


  constructor(private deviceService: DeviceDetectorService, private router: Router){}
  
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.deviceService.isDesktop()){
      return true
    }else{
      this.router.navigate(['/pagenotfound']);
      return false
    }
  }

  
}
