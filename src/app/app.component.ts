import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageService } from './services/storage.service';
import { TopBarComponent } from './shared/top-bar/top-bar.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TopBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hk-foot';
  isLoggedIn = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }
}
