import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

/* tslint:disable:semicolon */
// Create a new window interface so analytics can be set
interface MyWindow extends Window {
  analytics: any;
}

// Bootstrap analytics
const mywindow = <MyWindow>window


// If the Segment library has been successfully included, start tracking things
if (mywindow.analytics) {
  mywindow.analytics.load(environment.SegmentSourceKey)
  // Now we can trigger events, such as: mywindow.analytics.page()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err))
