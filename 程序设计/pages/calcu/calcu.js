Page({
  data: {
    multiArray: [['人民币', '美元', '日元', '英镑', '欧元','港币'], ['人民币', '美元', '日元', '英镑', '欧元','港币']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '人民币',
          price:1
        },
        {
          id: 1,
          name: '美元',
          price:2
        },
        {
          id: 2,
          name: '日元',
          price: 2
        },
        {
          id: 3,
          name: '英镑',
          price: 3
        },
        {
          id: 4,
          name: '欧元',
          price: 4
        },
        {
          id: 5,
          name: '港币',
          price: 3
        }
      ], [
        {
          id: 0,
          name: '人民币',
          price: 1
        },
        {
          id: 1,
          name: '美元',
          price: 1
        },
        {
          id: 2,
          name: '日元',
          price: 2
        },
        {
          id: 3,
          name: '英镑',
          price: 3
        },
        {
          id: 4,
          name: '欧元',
          price: 4
        },
        {
          id: 5,
          name: '港币',
          price: 3
        }
    ]],
    multiIndex: [0, 0],
    transprice:1,
    col1:1,
    col2:1,
    inputmon:0,//reset时应当把本处也清零
    outputmon:0,
    money:0,//每次输入都存储
    goalmon:1,
    orimon:1
   // disabled:"false"
    },
  bindMultiPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
    const data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    console.log("data.multiArray",data.multiArray)
    data.multiIndex[e.detail.column] = e.detail.value
    console.log("e.detail.value",e.detail.value)
    if (e.detail.column == 1) {
    this.setData({
      col1:e.detail.value
    })}
    else{
      this.setData({
        col2: e.detail.value
      })}
    console.log(data.multiIndex)
    this.setData(data)
  },
//////////////////////////////////////////////
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', this.data.money)
    console.log('form发生了submit事件，携带数据为：', this.data.money)

    //var inputmon = e.detail.value
    this.setData({
      inputmon: this.data.money
//转化为数值类型
    })
    console.log("typeof:",typeof (e.detail.value))
    console.log(this.data.inputmon)//此处需要修改//没存进去
    console.log("this.data.transprice",this.data.transprice)
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  
  moneyInput:function(e) {
    var money;
    money=e.detail.value
    this.setData({
      money: money,
    })
    console.log("/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)", /^(\d?)+(\.\d{0,2})?$/.test(e.detail.value))
    if (!(/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value))) { //正则验证，提现金额小数点后不能大于两位数字/^(\d?)+(\.\d{0,2})?$/￥￥￥￥/^(\d?)+(\.\d{0,2})?$/
      wx.showModal({
        title: '提示',
        content: '请输入两位小数',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
      money = e.detail.value.substring(0, e.detail.value.length - 1);
    } 
    if (parseInt(money) > 10000 || parseInt(money)<0)
    {
      money = e.detail.value.substring(0, (e.detail.value).length - 1);
      wx.showModal({
        title: '提示',
        content: '请输入1-10000的值',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }}
      })
    }
    this.setData({
      money: money,
    })
    console.log(money)
  },
// --------------------- 
//   作者：小白变大神 
// 来源：CSDN 
// 原文：https://blog.csdn.net/qq_43327305/article/details/88853092 
//   版权声明：本文为博主原创文章，转载请附上博文链接！

calmon:function(){
  var that =this;
  console.log("this.data.inputmon", this.data.inputmon)
 
  if(this.data.inputmon==0){
  wx.showModal({
    title: '提示',
    content: '请输入待计算的本币值再计算',
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else {
        console.log('用户点击取消')
      }
    }
  })}
  var money = this.data.inputmon * this.data.transprice//此处需要添加逻辑保证inputmon不是1才计算，其他时候alert
  console.log(" this.data.outputmon", money)  
  this.setData({
    outputmon: money//此处有类或其他种类错误
  })
  console.log(" this.data.outputmon", this.data.outputmon)
},

calcutrans:function(){//计算汇率
  var that = this;
  console.log("calcu", this.data.objectMultiArray[1][this.data.col1].price)
  // var transprice = this.data.objectMultiArray[1][this.data.col2].price / this.data.objectMultiArray[0][this.data.col1].price
  this.setData({
    transprice: this.data.objectMultiArray[1][this.data.col2].price / this.data.objectMultiArray[0][this.data.col1].price

  })
  console.log("transprice",this.data.transprice)
},  
    
  
onReady: function() {
  // 页面渲染完成

  var that = this
  //var jsonobj1
  wx.request({
    url: 'http://127.0.0.1:5000',
    method: 'GET',
    header: {
      'content-type': 'application/json' //默认值         
    }, 
    success: (res) => {
      console.log(res.data)
      for (var i = 0; i < 6; i++)
     { var up1 ="objectMultiArray[0]["+i+"].price";
        var up2 = "objectMultiArray[1][" + i + "].price";
        if(i==0) {      
        this.setData({
          [up1]:res.data.id0,
          [up2]:res.data.id0
                     })
        }
        else if(i==1) {
        this.setData({
          [up1]: res.data.id1,
          [up2]: res.data.id1
                     })
       } 
          else if (i == 2) {
          this.setData({
            [up1]: res.data.id2,
            [up2]: res.data.id2
          })
        }
        else if (i == 3) {
          this.setData({
            [up1]: res.data.id3,
            [up2]: res.data.id3
          })
        }
        else if (i == 4) {
          this.setData({
            [up1]: res.data.id4,
            [up2]: res.data.id4
          })
        }
        else if (i == 5) {
          this.setData({
            [up1]: res.data.id5,
            [up2]: res.data.id5
          })
        }
      }
      console.log(this.data.objectMultiArray)
    },
    fail: (res) => {
      console.log("失败");
    }
  }) 
},
onShow: function() {
  // 页面显示
},
onHide: function() {
  // 页面隐藏
},
onUnload: function() {
  // 页面关闭
}
})