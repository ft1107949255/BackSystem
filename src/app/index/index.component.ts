import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  data: any;
  options: any;
  pieData: any; //饼图
  pieoptions: any;
  polarAreaData: any; // 雷达图
  polarAreaoptions: any;
  barData: any; // 条形图
  baroptions: any;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'man',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(0, 22, 0, 0.2)',
          borderColor: 'blue',
          fill: true,  // 是否填充
          pointStyle: 'cirle', // 节点
        },
        {
          label: 'woman',
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: 'rgba(0, 22, 1, 0.5)',
          borderColor: 'green',
          fill: true,
          pointStyle: 'rectRounded',
        }
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'The consumption of men and women ',
        fontSize: 16,
        color: 'pink'
      },
      legend: {
        position: 'left'
      },
    };

    this.pieData = {
      labels: ['非常焦虑', '焦虑较重', '轻微焦虑', '不焦虑'],
      datasets: [
        {
          data: [2000, 1200, 500, 200],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            '#36B2CB',
            '#32B2FB',
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            '#36B2CB',
            '#32B2FB',
          ]
        }]
    };
    this.pieoptions = {
      title: {
        display: true,
        text: '产后孕妇焦虑程度',
        fontSize: 16,
        color: 'pink'
      },
      legend: {
        position: 'right'
      },
    };
    this.polarAreaData = {
      datasets: [{
        data: [
          400,
          561,
          701,
          321,
          901,
          620,
          300
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#24D23G",
          "#24A23B",
        ],
        label: 'My dataset'
      }],
      labels: [
        "Mondey",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    };
    this.polarAreaoptions = {
      title: {
        display: true,
        text: 'The Proportion of consumption between week ',
        fontSize: 16,
        color: 'pink'
      },
      legend: {
        position: 'bottom'
      },
    };
    this.barData = {
      labels: ['我能看到事物有趣的一面并能开心的笑', '我欣然乐观的期待未来的一切事物', '当事情出错时，我会不必要地责备自己', '我无缘无故感到焦虑和担心', '我无缘无故感到害怕和惊慌', '很多事情冲着我来使我透不过气', '我很不开心以至失眠', '我感到难过和悲伤', '我不开心到哭', '我想过要伤害自己'],
      datasets: [
        {
          label: 'A',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40,12,14,33]
        },
        {
          label: 'B',
          backgroundColor: '#9CCB65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90,32,34,23]
        },
        {
          label: 'C',
          backgroundColor: '#9CAC65',
          borderColor: '#7CA342',
          data: [78, 48, 30, 30, 86, 27, 60,42,44,13]
        }, {
          label: 'D',
          backgroundColor: '#9CCF65',
          borderColor: '#7CB34B',
          data: [48, 28, 40, 29, 86, 27, 50,22,24,21]
        }
      ]
    };
    this.baroptions = {
      title: {
        display: true,
        text: 'EPDS量表',
        fontSize: 16,
        color: 'pink'
      },
      legend: {
        position: 'bottom'
      },
    };
  }

  ngOnInit() {
  }

}
