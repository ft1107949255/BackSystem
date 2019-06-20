import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { selfHttp } from 'src/app/common/app.service';
import { apiList } from '../common/app.api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [selfHttp, apiList, MessageService]
})
export class ArticleComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  data: any;
  msgs: any;
  display: boolean= false;
  constructor(public http: selfHttp, public api: apiList) {
    console.log(this.api);
  }

  ngOnInit() {
    // this.http.post(this.api.urlList.login.path, {username: 1, password:22, other:1113}, res => {
    //   console.log('结果', res);
    // }, this.httpOptions);
    this.data = [{
      label: '推荐政策',
      expanded: true,
      children: [
        {
          label: '政策一',
          icon: 'pi pi-paperclip'
        },
        {
          label: '政策二',
        },
        {
          label: '政策三',
        },
        {
          label: '政策四',
        },
        {
          label: '政策五',
        },
      ]
    }];
  }
  showInfo() {
    this.display  = true;
  }
}
