import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn = false;
  isHidden = false;
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storageService.getLoginStatusObservable().subscribe({
      next: (isLogged) => (this.isLoggedIn = isLogged),
    });
    this.router.events.subscribe(() => {
      this.isHidden = this.router.url === '/connexion';
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.storageService.clean();
        this.router.navigate(['/accueil']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
