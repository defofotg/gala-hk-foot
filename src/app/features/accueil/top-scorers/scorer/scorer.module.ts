import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorerComponent } from './scorer.component';

@NgModule({
  declarations: [ScorerComponent],
  imports: [CommonModule],
  exports: [ScorerComponent],
})
export class ScorerModule {}
