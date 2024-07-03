import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { NavAndBackgroundComponent } from '../nav-and-background/nav-and-background.component';
import { RouterLink } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { login, logout } from '../User-login-state-store/user-login-actions';
import { Observable } from 'rxjs';
import { selectUsername, selectIsLoggedIn } from '../User-login-state-store/user-login-selectors';
import { AppState } from '../User-login-state-store/user-login-state';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavAndBackgroundComponent,CommonModule , ButtonModule, CheckboxModule, FormsModule, PasswordModule, InputTextModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username : string = '';
  password : string = '';

  constructor(private store: Store<AppState>,private router: Router) {}

  Login() {
    fetch("http://localhost:3000/user/login?username=" + this.username + "&password=" + this.password)
      .then(response => {
        return response.json();
      }
      ).then(data => {
        if (data) {
          this.store.dispatch(login({ username: this.username }));
          alert("Successfully logged in!");
          this.router.navigate(['/']);
        } else {
          alert("Failed to log in. Please try again.");
        }
      });
  }
}
