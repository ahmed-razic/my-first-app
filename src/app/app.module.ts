import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AppleComponent } from './apple/apple.component';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, 
    ServersComponent,
    WarningComponent,
    AlarmComponent,
    AppleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 