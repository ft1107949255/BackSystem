import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  types: any;
  tablelist: any;
  constructor() { }

  ngOnInit() {
    this.tablelist={
      header: [
        {
          field: 'username',
          value: '用户名'
        },
        {
          field: 'email',
          value: '邮箱'
        },
        {
          field: 'userful',
          value: '启用'
        },{
          field: 'deal',
          value: '操作'
        }
      ],
      body: [
        {username: 'admin', email: '', userful:true, deal: ''},
        {username: 'xqq', email: '244604512@qq.com',  userful:false, deal: ''}
      ]
    }

  }

}
