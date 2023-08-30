import { AuthService } from 'src/app/pages/auth/auth.service';
import { Component } from '@angular/core';
import { IUser } from '../pages/auth/interfaces/user';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  allUsers: IUser[] = []
  constructor( private authService: AuthService ) { }

  ngOnInit(){
    this.authService.get().subscribe( users => this.allUsers = users );
  }

}

