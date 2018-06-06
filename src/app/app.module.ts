import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatMenuModule, MatToolbarModule, MatIconModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
MatMenuModule