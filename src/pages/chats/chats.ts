import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';

/**
 * Generated class for the ChatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})

export class ChatsPage {
   @ViewChild("contentRef") contentHandle: Content;
  somethings: any = new Array(20);
    public items = [];
  private tabBarHeight;
  private topOrBottom:string;
  private contentBox;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }
  scrolling(ev){
    console.log('WOW IT IS SCROLLING');
  }
    ionViewDidEnter() {
      
    // this.topOrBottom=this.contentHandle._tabsPlacement;
    // this.contentBox=document.querySelector(".scroll-content")['style'];
  
    // if (this.topOrBottom == "top") {
    //   this.tabBarHeight = this.contentBox.marginTop;
    // } else if (this.topOrBottom == "bottom") {
    //   this.tabBarHeight = this.contentBox.marginBottom;
    // }
  }
 scrollingFun(e) {
    // if (e.scrollTop > this.contentHandle.getContentDimensions().contentHeight) {
    //   document.querySelector(".tabbar")['style'].display = 'none';
    //   if (this.topOrBottom == "top") {
    //     this.contentBox.marginTop = 0;
    //   } else if (this.topOrBottom == "bottom") {
    //     this.contentBox.marginBottom = 0;
    //   }

    // } else {
    //   document.querySelector(".tabbar")['style'].display = 'flex';
    //   if (this.topOrBottom == "top") {
    //     this.contentBox.marginTop = this.tabBarHeight;
    //   } else if (this.topOrBottom == "bottom") {
    //     this.contentBox.marginBottom = this.tabBarHeight;
    //   }

    // }//if else
  }//scrollingFun
}
