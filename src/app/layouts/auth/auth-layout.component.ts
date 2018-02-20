import { Component, OnInit, OnDestroy, ViewChild, HostListener, AnimationTransitionEvent, NgZone, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { GeneralService, UserService } from '../../core';

@Component({
  selector: 'app-layout',
  template: '<router-outlet></router-outlet>'
})
export class AuthLayoutComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(
    private generalService: GeneralService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.SetCompanyProperties();
    this.ValidateLogin();
  }

  private SetCompanyProperties(): void {
    this.generalService
      .GetCompanyProperties(window.location.origin).subscribe();
  }

  private ValidateLogin(): void {
    if (this.userService.isLooged()) {
      this.router.navigateByUrl('/home');
    }
  }
}
