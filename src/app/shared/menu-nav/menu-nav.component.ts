import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss'],
})
export class MenuNavComponent implements OnInit {
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
