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
    this.menuItems.getAll();
  }
}
