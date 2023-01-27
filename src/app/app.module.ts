import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PherosHeaderComponent } from './components/pheros-header/pheros-header.component';
import { PherosPresentationComponent } from './components/pheros-presentation/pheros-presentation.component';
import { PherosSocialMediaComponent } from './components/pheros-social-media/pheros-social-media.component';
import { PherosMainFormComponent } from './components/pheros-main-form/pheros-main-form.component';
import { PherosDecentralizeComponent } from './components/pheros-decentralize/pheros-decentralize.component';
import { PherosAccessTechComponent } from './components/pheros-access-tech/pheros-access-tech.component';
import { PherosSamedayServiceComponent } from './components/pheros-sameday-service/pheros-sameday-service.component';
import { PherosConnectOperationsComponent } from './components/pheros-connect-operations/pheros-connect-operations.component';
import { PherosPlanMonitorComponent } from './components/pheros-plan-monitor/pheros-plan-monitor.component';
import { PherosHappyCustomersComponent } from './components/pheros-happy-customers/pheros-happy-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    PherosHeaderComponent,
    PherosPresentationComponent,
    PherosSocialMediaComponent,
    PherosMainFormComponent,
    PherosDecentralizeComponent,
    PherosAccessTechComponent,
    PherosSamedayServiceComponent,
    PherosConnectOperationsComponent,
    PherosPlanMonitorComponent,
    PherosHappyCustomersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
