import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  class: any;
  username: any = '';
  password: any = '';
  msg: any = '';
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    // this.username = new FormControl('');
  }
  clickinput() {
    this.class = 'password';
  }
  blurinput() {
    this.class = '';
  }
  submit() {
    console.log(this.username);
    console.log(this.password);
    if(this.username== '') {
      this.msg = '用户名不能为空';
      return false;
    }else {
      this.msg = '';
    } 
    if(this.password== '') {
      this.msg = '密码不能为空';
      return false;
    } else {
      this.msg = '';
    }
    // 开始请求接口
    // 跳转页面
    this.router.navigate(['/home']);
  }
}
