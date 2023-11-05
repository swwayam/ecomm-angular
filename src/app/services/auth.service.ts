import { Injectable, inject  } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth'
import { AuthModel } from '../models/AuthModel.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  #auth: Auth = inject(Auth)
  #router = inject(Router)

  constructor() { }

  isLoggedIn(): boolean{

    if(localStorage.getItem('isLoggedIn') == "true"){
      return true
    }
    
    return false
  }

  getCurrentUser(){
    console.log(this.#auth.currentUser);
    
  }

  SignUp(user : AuthModel) : void {
    createUserWithEmailAndPassword(this.#auth, user.email, user.password).then((value) => {
      console.log(value);
      localStorage.setItem('isLoggedIn', "true")
      this.#router.navigateByUrl('')
      window.location.reload()

        }).catch(err =>  {console.log(err)}
    )
  }

  SignIn(user : AuthModel): void {
    signInWithEmailAndPassword(this.#auth,user.email, user.password).then((value) => {
      console.log(value.user.email);
      localStorage.setItem('isLoggedIn', "true")
      this.#router.navigateByUrl('')
      window.location.reload()
    }).catch(err =>  {console.log(err)}
    )
  }

  logout() : void{
    localStorage.setItem('isLoggedIn', "false")
    this.#auth.signOut()
    
  }
}
