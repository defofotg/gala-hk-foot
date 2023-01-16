import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScorerComponent } from './scorer/scorer.component';

@Component({
  standalone: true,
  imports: [CommonModule, ScorerComponent],
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrls: ['./top-scorers.component.scss'],
})
export class TopScorersComponent {}
