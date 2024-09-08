import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) {
    
  }

  // The $ suffix is just a convention to indicate that the variable is an observable
  user$ = this.userService.retornarUser();

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
