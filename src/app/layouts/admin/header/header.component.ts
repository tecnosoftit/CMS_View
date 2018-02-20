import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpened = true;
  mode = 'push';
  _mode = this.mode;
  constructor(
    private user: UserService,
  ) { }

  ngOnInit() {
    if (this.isOver()) {
      this._mode = 'over';
      this.isOpened = false;
    }
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 991px)`).matches;
  }

  toogleSidebar(): void {
    this.isOpened = !this.isOpened;
  }

  closeSession(): void {
    this.user.purgeAuth();
  }
}
