import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { IUser } from 'src/app/pages/auth/interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isLogged!:boolean
  testo: string = ''
  loggedUser!: IUser

  constructor(
    private authService: AuthService
    ) {
      this.authService.isLoggedIn$.subscribe(x => (this.isLogged = x))
      this.authService.user$.subscribe(x => this.loggedUser = x?.user as IUser)
    }

  logout(){
    this.authService.logout()
  }

  titolo(){
    return this.isLogged ? this.testo = 'Eccoti di nuovo' : this.testo = 'Benvenuto'
  }

  admin(){
    if(this.loggedUser?.email === 'admin@prova.com'){
      return true
    }else{
      return false
    }
  }

}
