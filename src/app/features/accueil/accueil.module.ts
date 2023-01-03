import { NgModule } from '@angular/core';
import { NextEventComponent } from './next-event/next-event.component';
import { LastEventComponent } from './last-event/last-event.component';
import { StatComponent } from './next-event/stat/stat.component';
import { AccueilComponent } from './accueil.component';

@NgModule({
  declarations: [
    NextEventComponent,
    LastEventComponent,
    StatComponent,
    AccueilComponent,
  ],
  imports: [],
  exports: [],
})
export class AccueilModule {}
