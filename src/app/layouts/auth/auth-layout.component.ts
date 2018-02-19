import { Component, OnInit, OnDestroy, ViewChild, HostListener, AnimationTransitionEvent, NgZone, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { GeneralService } from '../../core';

@Component({
  selector: 'app-layout',
  template: '<router-outlet></router-outlet>'
})
export class AuthLayoutComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
  ) { }

  ngOnInit(): void {
    this.SetCompanyProperties();
  }

  private SetCompanyProperties(): void {
    this.generalService
      .GetCompanyProperties(window.location.origin)
      .subscribe(
      data => {
        debugger;
      },
      err => {
        debugger;
      }
      );
  }
}
