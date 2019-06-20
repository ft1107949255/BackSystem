import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  providers: [MessageService]
})
export class UserTableComponent implements OnInit {
  @Input() tablelist: any;   // 接收父组件值
  selectedList: any;
  selectedColumns: any;
  checked: boolean;
  display:boolean= false;
  username: any = '';
  pwd: any = '';
  email: any = '';
  pwdShow:boolean= false;
  usernameShow:boolean= false;
  emailShow:boolean= false;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    
    this.selectedColumns = this.tablelist.header;
  }
  add() {
    console.log(this.tablelist);
    this.display=true;
  }
  handleChange(e) {
    console.log(e);
  }
  onConfirm() { }
  onReject() { }
  del(){
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: '删除这条的数据' });
  }
  submit() {
    if(this.username== '') {
      this.usernameShow = true;
      return false;
    }else {
      this.usernameShow = false;
    } 
    if(this.pwd== '') {
      this.pwdShow = true;
      return false;
    } else {
      this.pwdShow = false;
    }
    if(this.email== '') {
      this.emailShow = true;
      return false;
    } else {
      this.emailShow = false;
    }
  }
}
