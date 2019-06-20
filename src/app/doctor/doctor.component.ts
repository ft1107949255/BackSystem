import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  tablelist: any;
  selectedList: any;
  constructor() { }

  ngOnInit() {
    this.tablelist = {
      header: [
        {
          field: 'name',
          value: '名字',
        },
        {
          field: 'age',
          value: '年龄',
        },
        {
          field: 'company',
          value: '医院',
        },
        {
          value: '医院级别',
          field: 'level'
        },
        {
          value: '职业',
          field: 'job'
        },
      ],
      body: [
        { name: '爽子',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛1',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛2',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛3',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛4',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛5',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛6',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛7',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛8',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛9',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛10',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛11',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛12',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛13',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛14',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛15',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛16',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛17',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛18',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛18',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛20',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
        { name: '冯涛21',age: '24', company: '测试医院', job: '工程师', level: '医院级别'},
      ]
    }
  }

}
