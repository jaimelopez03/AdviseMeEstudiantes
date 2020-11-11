import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { take, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService,
              private navCtrl: NavController) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.user$.pipe(
        take(1),
        map(user => user ? true : false),
        tap(isLoggedIn => {
          if (isLoggedIn) {
            return true;
          } else {
            this.navCtrl.navigateRoot(['']);
            return false;
          }
        })
      );
  }
}
