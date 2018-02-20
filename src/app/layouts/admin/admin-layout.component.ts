import { Component, OnInit, OnDestroy, ViewChild, HostListener, AnimationTransitionEvent, NgZone, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService, UserService } from '../../core';
import { HeaderComponent } from './header/header.component';


const SMALL_WIDTH_BREAKPOINT = 991;

export interface Options {
  heading?: string;
  removeFooter?: boolean;
  mapHeader?: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  isAuthenticated: boolean;
  private _router: Subscription;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  currentLang = 'en';
  options: Options;
  theme = 'light';
  showSettings = false;
  isDocked = false;
  isBoxed = false;
  _autoCollapseWidth = 991;
  width = window.innerWidth;

  @ViewChild('sidebar') sidebar;

  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private modalService: NgbModal,
    private titleService: Title,
    private zone: NgZone,
    private userService: UserService,
    private header: HeaderComponent,
  ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit(): void {
    this.ValidateLogin();
    this.SetCompanyProperties();
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      document.querySelector('.main-content').scrollTop = 0;
      this.runOnRouteChange();
    });
  }

  toogleSidebar(): void {
    debugger;
    this.header.toogleSidebar();
  }

  ngAfterViewInit(): void {
    setTimeout(_ => this.runOnRouteChange());
  }

  ngOnDestroy() {
    this._router.unsubscribe();
  }

  runOnRouteChange(): void {
    if (this.header.isOver() || this.router.url === '/maps/fullscreen') {
      this.header.isOpened = false;
    }
    this.route.children.forEach((route: ActivatedRoute) => {
      let activeRoute: ActivatedRoute = route;
      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild;
      }
      this.options = activeRoute.snapshot.data;
    });

    if (this.options) {
      if (this.options.hasOwnProperty('heading')) {
        this.setTitle(this.options.heading);
      }
    }
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle('Decima - Bootstrap 4 Angular Admin Template | ' + newTitle);
  }

  openSearch(search) {
    this.modalService.open(search, { windowClass: 'search', backdrop: false });
  }

  private SetCompanyProperties(): void {
    this.generalService.GetCompanyProperties(window.location.origin);
  }

  private ValidateLogin(): void {
    if (!this.userService.isLooged()) {
      this.router.navigateByUrl('/authentication/signin');
    }
  }
}
