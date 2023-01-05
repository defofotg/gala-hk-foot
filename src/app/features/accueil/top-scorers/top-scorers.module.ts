import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopScorersComponent } from './top-scorers.component';
import { ScorerModule } from './scorer/scorer.module';

@NgModule({
  declarations: [TopScorersComponent],
  imports: [CommonModule, ScorerModule],
  exports: [TopScorersComponent],
})
export class TopScorersModule {}
