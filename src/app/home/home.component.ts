import { Component, OnInit } from '@angular/core';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // title: '你好啊'; // 传递字符串
  // title: ['你好啊a'];  // 传递数组
  title: any = '首页' ; //url标题
  class: any = 'pi-home' //icon
  icon_class: any= 'pi-chevron-left';
  newClass : any = '';
  left:any =  '';
  showList: {} ;
  constructor() { }

  ngOnInit() {
    this.showList = {
      index: true,  // 默认显示主页面
      doctor: false,  // 显示专家信息页面
      devices: false,  // 显示仪器问卷调查
      postpartum:false, //显示产后心理
      service:false, // 显示服务体系
      users: false, //显示用户管理
      updatePassword:false, //修改密码
      article:false,
    }
    console.log( this.showList);
  }

  checkPage(page){
    for(let v in this.showList) {
       this.showList[v] = false;
    }
    this.showList[page.name] = true;
    this.class = page.class;
    this.title = page.title;
  }
  changeicon() {
    console.log(this.icon_class);
    if(this.icon_class == 'pi-chevron-left') {
      this.icon_class = 'pi-chevron-right';
      this.left='left';
      this.newClass = 'right'
    } else {
      this.icon_class = 'pi-chevron-left';
      this.left='';
      this.newClass= '';
    }
  }
}
