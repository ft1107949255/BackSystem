import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { ElementRef } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: any;
  @Output() backPage: EventEmitter<any> = new EventEmitter();
  classList: any;
  constructor(private el: ElementRef) {

    this.items = [
      {
        label: '导航',
        icon: 'pi pi-pw',
        items: [
          {
            label: '首页',
            icon: 'pi pi-fw pi-home',
            command: (event) => {
              //event.originalEvent: Browser event
              //event.item: menuitem metadata
              this.backPage.emit({ name: 'index', class: 'pi-home', title: '首页' });
              this.clean(0);
            },
            // styleClass:''
          },
          {
            label: '专家信息管理',
            icon: 'pi pi-fw pi-plus',
            command: (event) => {
              //event.originalEvent: Browser event
              //event.item: menuitem metadata
              this.backPage.emit({ name: 'doctor', class: 'pi-plus', title: '专家信息管理' });
              this.clean(1);
            },
            // styleClass: ''
          },
          {
            label: '仪器问卷调查管理',
            icon: 'pi pi-fw pi-plus',
            command: (event) => {
              this.backPage.emit({ name: 'devices', class: 'pi-plus', title: '仪器问卷调查管理' });
              this.clean(2);
            }
          },
          {
            label: '产后心理管理',
            icon: 'pi pi-fw pi-plus',
            command: (event) => {
              this.backPage.emit({ name: 'postpartum', class: 'pi-plus', title: '产后心理管理' });
              this.clean(3);
            }
          },
          {
            label: '服务体系评价管理',
            icon: 'pi pi-fw pi-plus',
            command: (event) => {
              this.backPage.emit({ name: 'service', class: 'pi-plus', title: '服务体系评价管理' });
              this.clean(4);
            }
          },
          {
            label: '用户管理',
            icon: 'pi pi-fw pi-users',
            command: (event) => {
              this.backPage.emit({ name: 'users', class: 'pi-users', title: '用户管理' });
              this.clean(5);
            }
          }
        ],
        expanded: true,
      },
      {
        label: '系统',
        icon: 'pi pi-pw',
        items: [
          // {
          //   label: '修改密码',
          //   icon: 'pi pi-fw pi-unlock',
          //   command: (event) => {
          //     this.backPage.emit({ name: 'updatePassword', class: 'pi-unlock', title: '修改密码' });
          //     this.clean(6);
          //   }
          // },
          {
            label: '政策推荐',
            icon: 'pi pi-fw pi-unlock',
            command: (event) => {
              this.backPage.emit({ name: 'article', class: 'pi-unlock', title: '政策推荐' });
              this.clean(7);
            }
          }
        ],
        expanded: true
      },
    ];
  }
  ngOnInit() {

  }
  // ngAfterContentChecked() {
  //   console.log(1);
  // }
  clean(i) {
    $('.left-container .ui-menuitem-link').each(function (index, e) {
      console.log(i, index)
      $(this).css("background-color", "#f5f5f5");
      if (i == index) {
        $(this).css({ 'background-color': "pink", });
      }
    });
  }
  in_array(array, str) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == str)
        return true;
    }
    return false;
  }
}
