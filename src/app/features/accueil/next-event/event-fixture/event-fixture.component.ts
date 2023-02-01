import { CommonModule } from '@angular/common';
import { Component, Input, LOCALE_ID } from '@angular/core';
import { MatchInfos } from 'src/app/models/next-event';
import { FixtureTypePipe } from 'src/app/shared/pipes/fixture-type.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, FixtureTypePipe],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  selector: 'app-event-fixture',
  templateUrl: './event-fixture.component.html',
  styleUrls: ['./event-fixture.component.scss'],
})
export class EventFixtureComponent {
  @Input() fixture!: MatchInfos;
}
