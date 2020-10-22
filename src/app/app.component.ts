import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'my-app'
  mediaSub:Subscription;
  constructor(public mediaObserver:MediaObserver){}
  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
    });
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}
