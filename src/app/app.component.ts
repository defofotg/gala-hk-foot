import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { MenuNavComponent } from './shared/menu-nav/menu-nav.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TopBarComponent, MenuNavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [httpInterceptorProviders],
})
export class AppComponent implements OnInit {
  title = 'hk-foot';
  isHidden = false;

  constructor(readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isHidden = this.router.url === '/connexion';
    });
  }
}
