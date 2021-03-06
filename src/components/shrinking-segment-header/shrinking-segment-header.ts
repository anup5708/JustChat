import { 
    Directive,
    ElementRef,
    Renderer
} from '@angular/core';

import { NavController } from 'ionic-angular';

@Directive({
    selector: '[shrink-header]',
    host: {
        '(ionScroll)': 'onContentScroll($event)'
    }
})
export class ShrinkingSegmentHeader {

    header: any;
    headerHeight: any;
    translateAmt: any;
    scrollPosition: number = 0;
    lastScrollTop: number = 0;
    activePage: any;

    constructor(public element: ElementRef, public renderer: Renderer, public navCtrl: NavController) {
    }

    ngAfterViewInit() {

        // lets get the active page's view controller
        this.activePage = this.navCtrl.getActive().getHeader();
console.log(this.activePage);
        // let's select the header of the active page
        this.header = this.activePage._elementRef.nativeElement;

        // the height of the header
        //this.headerHeight = this.header.clientHeight;
        this.headerHeight = 56;
    }

    onContentScroll(ev) {
        ev.domWrite(() => {
            this.updateHeader(ev);
        });   
    }
 
    updateHeader(ev) {

      this.scrollPosition = ev.scrollTop;

      if (this.scrollPosition > this.lastScrollTop && this.scrollPosition >= 25) {
        // scrolling down
        this.renderer.setElementStyle(this.header, 'transition', 'all 0.3s linear');
        this.renderer.setElementStyle(this.header, 'transform', 'translateY(-' + this.headerHeight + 'px)');
      } else {
        // scrolling up
        this.renderer.setElementStyle(this.header, 'transform', 'translateY(0px)');
      }

      // reset
      this.lastScrollTop = this.scrollPosition;

    }


 
 
}