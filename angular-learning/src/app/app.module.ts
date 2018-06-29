import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyDialogComponent } from './dummy-dialog/dummy-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
