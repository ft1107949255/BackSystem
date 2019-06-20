import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
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
        label: '经济试用性', icon: 'pi pi-tag', command: (event) => {
          console.log(1);
          this.tab1 = true;
          this.tab2 = false;
          this.tab3 = false;
        }
      },
      {
        label: '培训服务', icon: 'pi pi-tag', command: (event) => {
          console.log(2);
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = false;
        }
      },
      {
        label: '售后服务', icon: 'pi pi-tag', command: (event) => {
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
          value: '昵称',
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
          value: '仪器市场采购价格评价',
        },
        {
          field: 'error1',
          value: '耗材市场采购价格评价',
        },
        {
          field: 'error2',
          value: '医院临床收费评价',
        },
        {
          field: 'error3',
          value: '医院使用率评价',
        },
        {
          field: 'error4',
          value: '首次保修年限评价',
        },
        {
          field: 'error5',
          value: '续保保修周期评价',
        },
        {
          field: 'error6',
          value: '保修价格评价',
        },
        {
          field: 'error7',
          value: '软件升级价格评价',
        },
        {
          field: 'error8',
          value: '仪器性价比整体满意度',
        },
      ],
      body: [
        { name: '爽子1', deviceName: '麻醉机1', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子2', deviceName: '麻醉机2', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子3', deviceName: '麻醉机3', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子4', deviceName: '麻醉机4', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2',},
        { name: '爽子5', deviceName: '麻醉机5', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子6', deviceName: '麻醉机6', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子7', deviceName: '麻醉机7', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子8', deviceName: '麻醉机8', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子9', deviceName: '麻醉机9', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子10', deviceName: '麻醉机10', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子11', deviceName: '麻醉机11', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子12', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },

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
          value: '产品说明书实用性评价',
        },
        {
          field: 'error1',
          value: '厂家咨询反馈及时性评价',
        },
        {
          field: 'error2',
          value: '远程技术支持评价',
        },
        {
          field: 'error3',
          value: '培训模式评价',
        },
        {
          field: 'error4',
          value: '培训费用评价',
        },
        {
          field: 'error5',
          value: '培训时间评价',
        },
        {
          field: 'error6',
          value: '培训服务整体满意度',
        },
      ],
      body: [
        { name: '爽子1', deviceName: '麻醉机1', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子2', deviceName: '麻醉机2', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子3', deviceName: '麻醉机3', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子4', deviceName: '麻醉机4', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子5', deviceName: '麻醉机5', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子6', deviceName: '麻醉机6', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子7', deviceName: '麻醉机7', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子8', deviceName: '麻醉机8', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子9', deviceName: '麻醉机9', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子10', deviceName: '麻醉机10', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子11', deviceName: '麻醉机11', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
        { name: '爽子12', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' },
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
          value: '售后响应时间评价',
        },
        {
          field: 'error1',
          value: '故障排除时间评价',
        },
        {
          field: 'error2',
          value: '平均维修时间评价',
        },
        {
          field: 'error3',
          value: '维修价格评价',
        },
        {
          field: 'error4',
          value: '配件市场价格评价',
        },
        {
          field: 'error5',
          value: '售后服务态度评价',
        },
        {
          field: 'error6',
          value: '维修后故障发生率',
        },
        {
          field: 'error7',
          value: '投诉处理满意度',
        },
        {
          field: 'error8',
          value: '售后服务整体满意度',
        },
        
      ],
      body: [
        { name: '爽子1', deviceName: '麻醉机1', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子2', deviceName: '麻醉机2', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子3', deviceName: '麻醉机3', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子4', deviceName: '麻醉机4', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子5', deviceName: '麻醉机5', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子6', deviceName: '麻醉机6', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子7', deviceName: '麻醉机7', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子8', deviceName: '麻醉机8', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子9', deviceName: '麻醉机9', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子10', deviceName: '麻醉机10', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子11', deviceName: '麻醉机11', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子12', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子13', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子14', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子15', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2', },
        { name: '爽子16', deviceName: '麻醉机12', deviceType: '麻醉机', date: '2019-06-12', error: '2', error1: '3' ,error2: '3' ,error3: '3' ,error4: '3' ,error5: '3' ,error6: '3' ,error7: '3' ,error8: '2',},
      ]
    }
  }

  ngOnInit() {

  }

}
