import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LastEventModule } from './last-event/last-event.module';
import { NextEventModule } from './next-event/next-event.module';
import { TopScorersModule } from './top-scorers/top-scorers.module';
import { AccueilRoutingModule } from './accueil-routing.module';

@NgModule({
  declarations: [AccueilComponent],
  imports: [
    AccueilRoutingModule,
    SharedModule,
    LastEventModule,
    NextEventModule,
    TopScorersModule,
  ],
  exports: [AccueilComponent],
})
export class AccueilModule {}
