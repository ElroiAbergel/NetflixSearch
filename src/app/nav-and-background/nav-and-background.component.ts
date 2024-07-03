import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ResultsComponent } from '../results/results.component';
import { RouterLink } from '@angular/router';
import { Store  } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../User-login-state-store/user-login-state';
import { selectUsername, selectIsLoggedIn } from '../User-login-state-store/user-login-selectors';
import { logout } from '../User-login-state-store/user-login-actions';
@Component({
  selector: 'app-nav-and-background',
  standalone: true,
  imports: [Button, MenubarModule, ResultsComponent, RouterLink,CommonModule],
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css'
})
export class NavAndBackgroundComponent {
username$: Observable<string>;
loggedIn$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.username$ = this.store.select(selectUsername);
    this.loggedIn$ = this.store.select(selectIsLoggedIn);
  }
  logout() {
    this.store.dispatch(logout());
  }
  items: any = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/'
    },
    {
      label: 'Series',
      icon: 'pi pi-fw pi-desktop',
      routerLink: '/series'
    },
    {
      label: 'Movies',
      icon: 'pi pi-fw pi-video ',
      routerLink: '/movies'
    }
  ]
}
