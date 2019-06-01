import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '美元，欧元，英镑兑人民币一周走势',
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['美元','欧元', '英镑'],
      top: 50,
      left: 'center',
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
      min:600,
      max:900,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '美元',
      type: 'line',
      smooth: true,
      data: [690.63, 691.05, 689.89, 691.01, 691.45, 690.19, 691.45]
    }, {
      name: '欧元',
      type: 'line',
      smooth: true,
      data: [772.67,773.00,773.38,771.18,769.99,768.27,769.04]
    }, {
      name: '英镑',
      type: 'line',
      smooth: true,
      data: [877.12, 878.16, 874.66, 874.04, 873.31, 870.15, 871.63]
    }]
  };
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
