import { Component } from '@angular/core';
import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount:  number=1133.345456;
  date: Date = new Date();
  object: any = {
    name: 'adhil',
    age: 22,
    address: 'Industrial estate perungudi'}

  array: any[] = [
'adhil',
'karthik',
'arun',
'kaviya',
  ];
  percentage: number = 0.1236565;

  value: number= 3;
}
