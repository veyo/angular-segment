import { Injectable } from '@angular/core';
import { Angulartics2Segment } from 'angulartics2/segment';

@Injectable()
export class VeyoExampleService {

  constructor(private analytics: Angulartics2Segment) { }

  public someMethod() {
    this.analytics.eventTrack('action', {
      customProps: 'value',
      metaProps: 'value'
    });
  }

}
