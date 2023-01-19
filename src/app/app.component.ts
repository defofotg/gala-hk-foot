import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { StorageService } from './services/storage.service';
import { TopBarComponent } from './shared/top-bar/top-bar.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TopBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [httpInterceptorProviders],
})
export class AppComponent implements OnInit {
  title = 'hk-foot';
  isLoggedIn = false;
  isHidden = false;

  constructor(
    private storageService: StorageService,
    readonly router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isHidden = this.router.url === '/connexion';
    });

    this.storageService.getLoginStatusObservable().subscribe({
      next: (isLogged) => (this.isLoggedIn = isLogged),
    });
  }
}
