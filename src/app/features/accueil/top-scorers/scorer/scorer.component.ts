import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.scss'],
})
export class ScorerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
