import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
 
  somethings: any = new Array(20);
  page1: any = 'ChatsPage';
  page2: any = 'StatusPage';
  page3: any = 'CallsPage';
    constructor(public navCtrl: NavController) {
    }
   onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }
}