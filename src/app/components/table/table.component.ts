import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService]
})
export class TableComponent implements OnInit {
  // tbaleList: any;
  selectedColumns: any;
  @Input() tablelist: any;   // 接收父组件值
  items: any;
  selectedList: any;
  display: boolean = false;
  selectedColumndata: any;  // 右键选中数据
  constructor(private messageService: MessageService) {

  }

  ngOnInit() {
    this.selectedColumns = this.tablelist.header;
    this.items = [
      {
        label: '查看', icon: 'pi pi-eye', command: (event) => this.showDialog()
      },
      { label: '删除', icon: 'pi pi-trash', command: (event) => this.del() }
    ];
  }
  delAll() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: '删除选中的数据' });
  }
  onConfirm() { }
  onReject() { }
  showDialog() {
    console.log(1)
    this.display = true;
  }
  del(){
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: '删除选中的数据' });
  }
}
