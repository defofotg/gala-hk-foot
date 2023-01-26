import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { appName } from 'src/app/shared/constants';
import { LastEventComponent } from './last-event/last-event.component';
import { NextEventComponent } from './next-event/next-event.component';
import { TopScorersComponent } from './top-scorers/top-scorers.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LastEventComponent,
    NextEventComponent,
    TopScorersComponent,
  ],
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  applicationName = appName;
  user = '';

  constructor(readonly storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.getUserInfo().subscribe({
      next: (userInfo) => (this.user = userInfo?.firstName),
      error: (err) => {
        console.log(err);
      },
    });
  }
}
