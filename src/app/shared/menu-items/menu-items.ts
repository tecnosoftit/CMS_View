import { Injectable } from '@angular/core';
import { UserService } from '../../core';
import { forEach } from '@angular/router/src/utils/collection';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

@Injectable()
export class MenuItems {

  public MENUITEMS: Menu[] = [];

  constructor(
    private userService: UserService,
  ) { }

  getAll(): void {
    this.MENUITEMS = [];
    this.MENUITEMS.push({
      state: 'home',
      name: 'Inicio',
      type: 'link',
      icon: 'basic-accelerator'
    });
    this.userService.getMenuItems().subscribe((response) => {
      response.forEach(el => {
        if (el.MEN_ISPARENT) {
          let children = [];
          response.forEach(al => {
            if (!al.MEN_ISPARENT && al.MEN_PARENTID === el.MEN_ID) {
              children.push(al);
            }
          });
          let childrenMenu = [];
          children.forEach(al => {
            childrenMenu.push({
              state: al.MEN_CONTROLLER + '/' + al.MEN_VIEW,
              name: al.MEN_NAME
            })
          });
          this.MENUITEMS.push({
            state: el.MEN_CONTROLLER + '/' + el.MEN_VIEW,
            name: el.MEN_NAME,
            type: 'sub',
            icon: 'basic-sheet-txt',
            children: childrenMenu
          });
        } else {
          if (!el.MEN_ISPARENT && el.MEN_PARENTID === 0) {
            this.MENUITEMS.push({
              state: el.MEN_CONTROLLER + '/' + el.MEN_VIEW,
              name: el.MEN_NAME,
              type: 'link',
              icon: 'basic-sheet-txt'
            });
          }
        }
      });
    });
  }
}
