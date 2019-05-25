import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  console.log(1);
  canvas.setChart(chart);
  console.log(2);
  var option = {
    title: {
      text: '外币兑人民币一周趋势',
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['美元', '日元', '英镑'],
      top: 50,
      left: 'center',
      backgroundColor: 'white',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    
    series: [{
      name: '美元',
      id:'1',
      type: 'line',
      smooth: true,
      data: [668, 668, 666, 668, 668,668,668]
    }, {
      name: '日元',
      id:'2',
      type: 'line',
      smooth: true,
      data: [6, 6, 6, 6, 6, 6, 6]
    }, {
      name: '英镑',
      id:'3',
      type: 'line',
      smooth: true,
      data: [800, 800, 800, 800, 800, 800, 800]
    }]
  };
  console.log(3),
  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {

  }
});
