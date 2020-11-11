import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  currentID = "";
  

  constructor(private afa: AngularFireAuth,
              private userService: UserService) {
                this.user$ = this.afa.authState.pipe(
                  switchMap(user => {
                    if (user) {
                      return this.userService.getUser(user.uid);
                    } else {
                      return of(null);
                    }
                  })
                );
  }

  GetID() {
    
    
    return this.afa.auth.currentUser.uid
  }

  login(email: string, password: string): Promise<any> {
    return this.afa.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string): Promise<any> {
    return this.afa.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    this.currentID = ""
    return this.afa.auth.signOut();
    
  }
}
