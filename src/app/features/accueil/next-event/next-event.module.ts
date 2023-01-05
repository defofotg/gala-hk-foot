import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtureHistoryModule } from './fixture-history/fixture-history.module';
import { NextEventComponent } from './next-event.component';
import { EventFixtureModule } from './event-fixture/event-fixture.module';

@NgModule({
  declarations: [NextEventComponent],
  imports: [CommonModule, EventFixtureModule, FixtureHistoryModule],
  exports: [NextEventComponent],
})
export class NextEventModule {}
