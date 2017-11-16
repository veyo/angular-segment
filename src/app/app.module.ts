import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/segment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { VeyoExampleService } from './veyo-example/veyo-example.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Angulartics2Module.forRoot([Angulartics2Segment]),
    BrowserModule
  ],
  providers: [
    VeyoExampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
