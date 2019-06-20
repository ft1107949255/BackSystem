import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-instruments',
  templateUrl: './devices-instruments.component.html',
  styleUrls: ['./devices-instruments.component.css']
})
export class DevicesInstrumentsComponent implements OnInit {
  selectedtype: any;
  types: any;
  items: any;
  tablelist1: any;
  tablelist2: any;
  tablelist3: any;
  tab1 = true;
  tab2 = false;
  tab3 = false;
  constructor() {
    this.types = [
      // { field: '请选择类型', value: null },
      { label: '麻醉机', value: { id: 1, name: '麻醉机', code: 'A' } },
      { label: '呼吸机', value: { id: 2, name: '呼吸机', code: 'B' } },
      { label: '多参数监护仪', value: { id: 3, name: '多参数监护仪', code: 'C' } },
      { label: '无创血红蛋白监测仪', value: { id: 4, name: '无创血红蛋白监测仪', code: 'D' } },
      { label: '麻醉深度监测仪', value: { id: 5, name: '麻醉深度监测仪', code: 'E' } },
      { label: '脑氧饱和度监测仪', value: { id: 6, name: '脑氧饱和度监测仪', code: 'F' } }
    ];
    this.items = [
      {
        label: '临床可靠性', icon: 'pi pi-tag', command: (event) => {
          console.log(1);
          this.tab1 = true;
          this.tab2 = false;
          this.tab3 = false;
        }
      },
      {
        label: '临床用户体验', icon: 'pi pi-tag', command: (event) => {
          console.log(2);
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = false;
        }
      },
      {
        label: '临床使用效果', icon: 'pi pi-tag', command: (event) => {
          console.log(3);
          this.tab1 = false;
          this.tab2 = false;
          this.tab3 = true;
        }
      },
    ];
    this.tablelist1 = {
      frozenCols: [
        {
          field: 'name',
          value: '微信昵称',
        },
        {
          field: 'deviceName',
          value: '设备名称',
        },
      ],
      header: [
        {
          field: 'name',
          value: '微信昵称',
        },
        {
          field: 'deviceName',
          value: '设备名称',
        },
        {
          field: 'deviceType',
          value: '设备类型',
        },
        {
          field: 'date',
          value: '填写时间',
        },
        {
          field: 'error',
          value: '硬件运行故障发生率',
        },
        {
          field: 'error1',
          value: '硬件故障描述',
        },
        {
          field: 'error2',
          value: '软件运行故障发生率',
        },
        {
          field: 'error3',
          value: '软件故障描述',
        },
        {
          field: 'error4',
          value: '平均无故障运行时间',
        },
        {
          field: 'error5',
          value: '安全报警的及时性',
        },
        {
          field: 'error6',
          value: '安全报警的准确性',
        },
        {
          field: 'error7',
          value: '故障报警提示准确性',
        },
        {
          field: 'error8',
          value: '故障报警提示及时性',
        },
        {
          field: 'error9',
          value: '呼吸模式选择的实用性',
        },
        {
          field: 'error10',
          value: '呼吸模式选择的可靠性',
        },
        {
          field: 'error11',
          value: '各种传感器工作准确性',
        },
        {
          field: 'error12',
          value: '系统设置反馈及时性',
        },
        {
          field: 'error13',
          value: '整机工作的安全性',
        },
        {
          field: 'error14',
          value: '整机工作的实用性',
        },
        {
          field: 'error15',
          value: '血压监测抗干扰能力',
        },
      ],
      body: [
        { name: '爽子1', deviceName: '麻醉机1', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子2', deviceName: '麻醉机2', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子3', deviceName: '麻醉机3', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子4', deviceName: '麻醉机4', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子5', deviceName: '麻醉机5', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子6', deviceName: '麻醉机6', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子7', deviceName: '麻醉机7', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子8', deviceName: '麻醉机8', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子9', deviceName: '麻醉机9', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子10', deviceName: '麻醉机10', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子11', deviceName: '麻醉机11', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子12', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},

      ]
    }
    this.tablelist2 = {
      frozenCols: [
        {
          field: 'name',
          value: '微信昵称',
        },
        {
          field: 'deviceName',
          value: '设备名称',
        },
      ],
      header: [
        {
          field: 'name',
          value: '微信昵称',
        },
        {
          field: 'deviceName',
          value: '设备名称',
        },
        {
          field: 'deviceType',
          value: '设备类型',
        },
        {
          field: 'date',
          value: '填写时间',
        },
        {
          field: 'error',
          value: '硬件操作方便性',
        },
        {
          field: 'error1',
          value: '应急处理措施的完备性',
        },
        {
          field: 'error2',
          value: '控制按键布局合理性',
        },
        {
          field: 'error3',
          value: '控制按键标识清晰度',
        },
        {
          field: 'error4',
          value: '传感器及接头布局合理性',
        },
        {
          field: 'error5',
          value: '传感器接头标识清晰度',
        },
        {
          field: 'error6',
          value: '开机启动速度',
        },
        {
          field: 'error7',
          value: '自检功能合理性',
        },
        {
          field: 'error8',
          value: '页面内容设置合理性',
        },
        {
          field: 'error9',
          value: '软件操作方便性',
        },
        {
          field: 'error10',
          value: '软件操作功能完整性',
        },
        {
          field: 'error11',
          value: '硬件设施整体满意度',
        },
        {
          field: 'error12',
          value: '软件功能整体满意度',
        },
        {
          field: 'error13',
          value: '整体使用满意度',
        },
        {
          field: 'error14',
          value: '血压监护满意度',
        },
        {
          field: 'error15',
          value: '心电监护满意度',
        },
      ],
      body: [
        { name: '爽子1', deviceName: '麻醉机1', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子2', deviceName: '麻醉机2', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子3', deviceName: '麻醉机3', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子4', deviceName: '麻醉机4', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子5', deviceName: '麻醉机5', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子6', deviceName: '麻醉机6', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子7', deviceName: '麻醉机7', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子8', deviceName: '麻醉机8', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子9', deviceName: '麻醉机9', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子10', deviceName: '麻醉机10', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子11', deviceName: '麻醉机11', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},
        { name: '爽子12', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3'},

      ]
    }
    this.tablelist3 = {
      frozenCols: [
        {
          field: 'name',
          value: '微信昵称',
        },
        {
          field: 'deviceName',
          value: '设备名称',
        },
      ],
      header: [
        {
          field: 'name',
          value: '微信昵称',
        },
        {
          field: 'deviceName',
          value: '设备名称',
        },
        {
          field: 'deviceType',
          value: '设备类型',
        },
        {
          field: 'date',
          value: '填写时间',
        },
        {
          field: 'error',
          value: '麻醉效果调控有效性',
        },
        {
          field: 'error1',
          value: '潮气量调控有效性',
        },
        {
          field: 'error2',
          value: '气道压调控有效性',
        },
        {
          field: 'error3',
          value: '呼吸频率调控有效性',
        },
        {
          field: 'error4',
          value: '呼末二氧化碳浓度调控有效性',
        },
        {
          field: 'error5',
          value: '术后拔管情况',
        },
        {
          field: 'error6',
          value: '术后苏醒情况',
        },
        {
          field: 'error7',
          value: '术后肺部相关并发症发生情况',
        },
        {
          field: 'error8',
          value: '血气指标改善有效性',
        },
        {
          field: 'error9',
          value: '患者脱机情况',
        },
        {
          field: 'error10',
          value: '呼吸机对抗发生情况',
        },
        {
          field: 'error11',
          value: '患者呼吸整体改善情况',
        },
        {
          field: 'error12',
          value: '术中低血压识别准确性',
        },
        {
          field: 'error13',
          value: '术中高血压识别准确性',
        },
        {
          field: 'error14',
          value: '术中心律失常识别准确性',
        },
        {
          field: 'error15',
          value: '术中心血管活性药物应用指导准确性',
        },
        {
          field: 'error16',
          value: '氧饱和度调控指导准确性',
        },
        
      ],
      body: [
        { name: '爽子1', deviceName: '麻醉机1', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子2', deviceName: '麻醉机2', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子3', deviceName: '麻醉机3', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子4', deviceName: '麻醉机4', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子5', deviceName: '麻醉机5', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子6', deviceName: '麻醉机6', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子7', deviceName: '麻醉机7', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子8', deviceName: '麻醉机8', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子9', deviceName: '麻醉机9', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子10', deviceName: '麻醉机10', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子11', deviceName: '麻醉机11', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子12', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子13', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子14', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子15', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},
        { name: '爽子16', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', error9: '3' ,error10: '3' ,error11: '3' ,error12: '3' ,error13: '3' ,error14: '3' ,error15: '3',error16: '3'},

      ]
    }
    
  }

  ngOnInit() {

  }

}
