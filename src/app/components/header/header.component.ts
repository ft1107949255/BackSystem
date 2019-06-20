import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: any;
  id = 'hello, father';
  items: any;
  display: boolean= false;
  checkNewPwd: any='';
  oldPwd: any= '';
  newPwd: any ='';
  oldPwdShow: boolean = false;
  newPwdShow: boolean = false;
  checkNewPwdShow: boolean = false;
  errorPwdShow: boolean= false;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: '注销',
        icon: 'pi pi-power-off'
      },
      {
        label: '修改密码',
        icon: 'pi pi-key',
        command: (event => {
          // 显示修改密码弹框
          this.display = true;
        })
      }
    ];
  }
  submit() {
    console.log(1, this.oldPwd);
    if(this.oldPwd == '') {
      console.log(2);
      this.oldPwdShow = true;
      return false;
    }else {
      this.oldPwdShow = false;
    } 
    if(this.newPwd== '') {
      this.newPwdShow = true;
      return false;
    } else {
      this.newPwdShow = false;
    }
    if(this.checkNewPwd== '') {
      this.checkNewPwdShow = true;
      return false;
    } else {
      this.checkNewPwdShow = false;
    }
    if(this.newPwd != '' &&  this.checkNewPwd != '' && this.newPwd != this.checkNewPwd ) {
      this.errorPwdShow = true;
      return false;
    }
  }
}
