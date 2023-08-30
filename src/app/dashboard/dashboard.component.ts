import { Component } from '@angular/core';
import { IUser } from '../pages/auth/interfaces/user';
import { AuthService } from '../pages/auth/auth.service';
import { IAccessData } from '../pages/auth/interfaces/access-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  profile!: IUser

  constructor( private authService : AuthService ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.profile = user!.user)
    window.onload = () => {
      this.authService.restoreUser()
    }
  }

}
