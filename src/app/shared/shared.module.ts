import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { ShowAuthedDirective } from './show-authed.directive';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';


@NgModule({
  imports: [
    RouterModule,
    NgbModule,
    CommonModule,
    //BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ShowAuthedDirective,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    //BrowserModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ShowAuthedDirective,
    NavbarComponent,
    FooterComponent
  ],
})
export class SharedModule { }
