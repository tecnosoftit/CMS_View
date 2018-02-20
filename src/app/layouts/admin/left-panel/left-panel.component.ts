import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../shared/menu-items/menu-items';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor(
    public menuItems: MenuItems,
  ) { }

  ngOnInit() {
  }

  addMenuItem(): void {
    this.menuItems.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'basic-webpage-txt',
      children: [
        { state: 'menu', name: 'MENU' },
        { state: 'menu', name: 'MENU' }
      ]
    });
  }
}
