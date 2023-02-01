import { Pipe, PipeTransform } from '@angular/core';
import { FixtureType } from 'src/app/models/next-event';
import { fixtureTypeLabels } from '../constants';

@Pipe({
  name: 'fixtureType',
  standalone: true,
})
export class FixtureTypePipe implements PipeTransform {
  transform(fixtureType: FixtureType): string {
    switch (fixtureType) {
      case FixtureType.SANTE: {
        return fixtureTypeLabels.SANTE;
      }
      case FixtureType.FRIENDLY: {
        return fixtureTypeLabels.FRIENDLY;
      }
      case FixtureType.ALLSTAR: {
        return fixtureTypeLabels.ALLSTAR;
      }
      default: {
        return 'UNKNOWN';
      }
    }
  }
}
